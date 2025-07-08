"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookController = exports.getUserBotCount = exports.createBotController = void 0;
const bot_service_1 = require("./bot.service");
const telegram_1 = require("../../libs/telegram");
const bot_validation_1 = require("./bot.validation");
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
const subscribers_service_1 = require("../subscribers/subscribers.service");
const app_1 = require("../../app");
const botService = new bot_service_1.BotService();
const telegramService = new telegram_1.TelegramService();
const subscriberService = new subscribers_service_1.SubscriberService();
const createBotController = async (req, res) => {
    const parsedBody = await bot_validation_1.CreateBotSchema.safeParseAsync(req.body);
    if (!parsedBody.success) {
        const formattedErrors = parsedBody.error?.errors.map((e) => ({
            field: e.path[0],
            message: e.message,
        }));
        throw new httpMainError_1.default(formattedErrors[0].message || 'Validation failed', 400, parsedBody.error.name || 'validation error', formattedErrors);
    }
    const botToken = parsedBody.data.token;
    const teamId = parsedBody.data.teamId;
    const botInfo = await telegramService.validateToken(botToken);
    if (!botInfo.id) {
        throw new httpMainError_1.default('Invalid bot token!', 400, 'Validation Error', null);
    }
    if (!botInfo.username) {
        throw new httpMainError_1.default('Bot username not found', 400, 'Validation error', null);
    }
    const name = botInfo.first_name;
    const username = botInfo.username;
    const findBot = await botService.findByToken(botToken);
    if (findBot)
        throw new httpMainError_1.default('Bot already exist', 400, 'Duplicate Schema Error', null);
    if (!req.user?.id) {
        throw new httpMainError_1.default('Invalid user', 400, 'Invalid User Error', null);
    }
    const createdBot = await botService.createBot(name, username, req.user.id, botToken, teamId);
    const webhookUrl = process.env.MAIN_URL + '/api/bot/webhook/' + createdBot.id;
    await telegramService.setWebhook(botToken, webhookUrl);
    res.status(200).json({
        success: true,
        message: 'Bot created successfully',
    });
};
exports.createBotController = createBotController;
const getUserBotCount = async (req, res) => {
    const id = req.user?.id;
    if (!id)
        return;
    const botCount = await botService.getTotalbotsOwnedByUser(id);
    res.status(200).json({
        success: true,
        message: 'Bot created successfully',
        count: botCount,
    });
};
exports.getUserBotCount = getUserBotCount;
const webhookController = async (req, res) => {
    const id = req.params.botId;
    const findBot = await botService.findById(id);
    if (!findBot) {
        app_1.logger.error('Bot Not found');
        res.sendStatus(200);
        return;
    }
    const update = req.body;
    if (!update.message || !update.message.text) {
        res.sendStatus(200);
        return;
    }
    const messageText = update.message.text;
    const chatId = update.message.chat.id;
    const username = update.message.from.username || null;
    const firstName = update.message.from.first_name || null;
    const lastName = update.message.from.last_name || null;
    if (messageText === '/start') {
        const existingSubscriber = await subscriberService.findSubscriberByChatIdandBotId(chatId.toString(), findBot.id);
        if (!existingSubscriber) {
            await subscriberService.create(chatId.toString(), username, firstName, lastName, findBot.id);
            const botInit = telegram_1.TelegramService.initialize(findBot.token);
            await botInit.sendMessage(chatId, "🎉 Welcome! You've been subscribed.");
        }
    }
    res.sendStatus(200);
    return;
};
exports.webhookController = webhookController;
