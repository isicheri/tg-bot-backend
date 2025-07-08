"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
class TelegramService {
    static initialize(token) {
        const telegramBot = new node_telegram_bot_api_1.default(token);
        return telegramBot;
    }
    async validateToken(token) {
        const bot = TelegramService.initialize(token);
        const botInfo = await bot.getMe();
        return botInfo;
    }
    async setWebhook(token, webHookUrl) {
        const bot = TelegramService.initialize(token);
        await bot.setWebHook(webHookUrl);
    }
}
exports.TelegramService = TelegramService;
