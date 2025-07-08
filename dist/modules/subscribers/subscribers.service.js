"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberService = void 0;
const client_1 = __importDefault(require("../../config/db/client"));
class SubscriberService {
    async create(chatId, username, firstName, lastName, botId) {
        return await client_1.default.subscriber.create({
            data: {
                bot: {
                    connect: {
                        id: botId,
                    },
                },
                username,
                firstName,
                lastName,
                chatId,
            },
        });
    }
    async findSubscriberByChatIdandBotId(chatId, botId) {
        return await client_1.default.subscriber.findFirst({
            where: {
                chatId,
                botId,
            },
        });
    }
    async findManyBotSubscribers(botId) {
        return await client_1.default.subscriber.findMany({ where: { botId } });
    }
    async deleteSubscriberByChatId(chatId) {
        const sub = await client_1.default.subscriber.findFirst({ where: { chatId } });
        if (!sub) {
            return;
        }
        await client_1.default.subscriber.delete({
            where: {
                id: sub.id,
            },
        });
    }
    async totalBotSubsciberCount(botId) {
        return await client_1.default.subscriber.count({
            where: {
                botId,
            },
        });
    }
    async getLast7DaysSubscriberGrowth(botId) {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
        const data = await client_1.default.subscriber.groupBy({
            by: ['createdAt'],
            _count: { id: true },
            where: {
                botId,
                createdAt: { gte: sevenDaysAgo },
            },
            orderBy: { createdAt: 'asc' },
        });
        // Format to { date: 'YYYY-MM-DD', count: number }
        const formatted = data.map((entry) => ({
            date: entry.createdAt.toISOString().split('T')[0],
            count: entry._count.id,
        }));
        return formatted;
    }
}
exports.SubscriberService = SubscriberService;
