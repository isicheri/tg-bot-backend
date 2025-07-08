"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBotBroadCastsCountController = exports.getRecentBroadcasts = exports.sendBroadcast = void 0;
const bot_service_1 = require("../bots/bot.service");
const subscribers_service_1 = require("../subscribers/subscribers.service");
const broadcast_service_1 = require("./broadcast.service");
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
const app_1 = require("../../app");
const broadcast_validation_1 = require("./validation/broadcast.validation");
const botService = new bot_service_1.BotService();
const subscriberService = new subscribers_service_1.SubscriberService();
const broadCastService = new broadcast_service_1.BroadCastService();
const sendBroadcast = async (req, res) => {
    const parsedBody = await broadcast_validation_1.BroadCastSchema.safeParseAsync(req.body);
    if (!parsedBody.success) {
        const formattedErrors = parsedBody.error.errors.map((e) => ({
            field: e.path[0],
            message: e.message,
        }));
        throw new httpMainError_1.default(formattedErrors[0].message || 'Validation failed', 400, parsedBody.error.name || 'validation error', formattedErrors);
    }
    const botId = req.params.botId;
    const message = parsedBody.data.message;
    const findBot = await botService.findById(botId);
    if (!findBot)
        throw new httpMainError_1.default('Bot not found', 400, 'Not Found', null);
    if (findBot.userId !== req.user?.id) {
        throw new httpMainError_1.default('Unauthorized', 403, 'Forbidden', null);
    }
    const subscribers = await subscriberService.findManyBotSubscribers(botId);
    const batchSize = 20;
    let successCount = 0;
    for (let i = 0; i < subscribers.length; i += batchSize) {
        const batch = subscribers.slice(i, i + batchSize);
        const results = await Promise.allSettled(batch.map((subscriber) => broadCastService.sendBroadcast(findBot.token, subscriber.chatId, message)));
        results.forEach((result, idx) => {
            if (result.status === 'fulfilled') {
                successCount++;
            }
            else {
                app_1.logger.error(`Failed to send to ${batch[idx].chatId}: ${result.reason?.message || 'Unknown error'}`);
            }
        });
        await new Promise((r) => setTimeout(r, 1000));
    }
    await broadCastService.create(message, findBot.id, successCount);
    res.status(200).json({
        status: true,
        data: {
            subscriberCount: subscribers.length,
            successCount: successCount,
        },
    });
};
exports.sendBroadcast = sendBroadcast;
const getRecentBroadcasts = async (req, res) => {
    const botId = req.params.botId;
    const findBot = await botService.findById(botId);
    if (!findBot) {
        throw new httpMainError_1.default('Bot not found', 400, 'Not Found', null);
    }
    const broadcasts = await broadCastService.getRecentBroadcasts(botId);
    const subscriberCount = await subscriberService.totalBotSubsciberCount(botId);
    res.status(200).json({
        status: true,
        data: broadcasts,
        subscriberCount: subscriberCount,
    });
};
exports.getRecentBroadcasts = getRecentBroadcasts;
const getBotBroadCastsCountController = async (req, res) => {
    const botId = req.params.botId;
    if (!botId) {
        throw new httpMainError_1.default('Bot Not Found', 404, 'Not Found Error', null);
    }
    const count = await broadCastService.getBotBroadCastsCount(botId);
    res.status(200).json({
        status: true,
        data: count,
    });
};
exports.getBotBroadCastsCountController = getBotBroadCastsCountController;
