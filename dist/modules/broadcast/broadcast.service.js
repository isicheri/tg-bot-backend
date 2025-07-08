"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadCastService = void 0;
const app_1 = require("../../app");
const client_1 = __importDefault(require("../../config/db/client"));
const telegram_1 = require("../../libs/telegram");
const subscribers_service_1 = require("../subscribers/subscribers.service");
const subscriberService = new subscribers_service_1.SubscriberService();
class BroadCastService {
    async create(message, botId, successCount) {
        return await client_1.default.broadcast.create({ data: { message, botId, successCount } });
    }
    async sendBroadcast(token, chatId, message) {
        const bot = telegram_1.TelegramService.initialize(token);
        try {
            await bot.sendMessage(chatId, message);
        }
        catch (error) {
            if (typeof error === "object" && error !== null && 'response' in error) {
                const err = error;
                if (err.response?.statusCode === 403) {
                    app_1.logger.warn(`User ${chatId} blocked the bot.`);
                    await subscriberService.deleteSubscriberByChatId(chatId);
                }
            }
            throw error;
        }
    }
    //TODO: create a new recent broadcast count to check for recents broadcast properly
    async getRecentBroadcasts(botId, limit = 5) {
        return await client_1.default.broadcast.findMany({
            where: { botId },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });
    }
    async getBotBroadCastsCount(botId) {
        return await client_1.default.broadcast.count({
            where: {
                botId,
            },
        });
    }
}
exports.BroadCastService = BroadCastService;
