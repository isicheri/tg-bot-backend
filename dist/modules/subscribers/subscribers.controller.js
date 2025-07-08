"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriberGrowthChartController = exports.getSubscriberGrowthRate = exports.totalBotSubsciberCountController = void 0;
const subscribers_service_1 = require("./subscribers.service");
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
const client_1 = __importDefault(require("../../config/db/client"));
const subscriberService = new subscribers_service_1.SubscriberService();
const totalBotSubsciberCountController = async (req, res) => {
    const botId = req.params.botId;
    const userId = req.user?.id;
    if (!userId)
        throw new httpMainError_1.default('Unauthorised', 403, 'Not found error', null);
    const { authorized, bot } = await isUserAuthorizedForBot(userId, botId);
    if (!bot)
        throw new httpMainError_1.default('Bot not found!', 404, 'Not found error', null);
    if (!authorized) {
        throw new httpMainError_1.default('Unauthorized', 403, 'Authorization error', null);
    }
    const count = await subscriberService.totalBotSubsciberCount(botId);
    res.status(200).json({
        status: true,
        data: count,
    });
};
exports.totalBotSubsciberCountController = totalBotSubsciberCountController;
const isUserAuthorizedForBot = async (userId, botId) => {
    const bot = await client_1.default.bot.findUnique({
        where: { id: botId },
        select: { userId: true, teamId: true },
    });
    if (!bot)
        return { authorized: false, bot: null };
    if (bot.userId === userId)
        return { authorized: true, bot };
    if (bot.teamId) {
        const teamMember = await client_1.default.teamMember.findFirst({
            where: {
                teamId: bot.teamId,
                userId,
            },
        });
        if (teamMember)
            return { authorized: true, bot };
    }
    return { authorized: false, bot };
};
const getSubscriberGrowthRate = async (req, res) => {
    const botId = req.params.botId;
    const period = req.query.period || 'week';
    const now = new Date();
    let lastPeriodStart, currentPeriodStart;
    if (period === 'year') {
        currentPeriodStart = new Date(now.getFullYear(), 0, 1);
        lastPeriodStart = new Date(now.getFullYear() - 1, 0, 1);
    }
    else if (period === 'month') {
        currentPeriodStart = new Date(now.getFullYear(), now.getMonth(), 1);
        lastPeriodStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    }
    else {
        currentPeriodStart = new Date();
        currentPeriodStart.setDate(now.getDate() - 7);
        lastPeriodStart = new Date();
        lastPeriodStart.setDate(now.getDate() - 14);
    }
    const previousCount = await client_1.default.subscriber.count({
        where: { botId, createdAt: { gte: lastPeriodStart, lt: currentPeriodStart } },
    });
    const currentCount = await client_1.default.subscriber.count({
        where: { botId, createdAt: { gte: currentPeriodStart } },
    });
    const growthRate = previousCount === 0 ? 100 : ((currentCount - previousCount) / previousCount) * 100;
    res.json({
        currentCount,
        previousCount,
        growthRate: Number(growthRate.toFixed(2)),
    });
};
exports.getSubscriberGrowthRate = getSubscriberGrowthRate;
const subscriberGrowthChartController = async (req, res) => {
    const botId = req.params.botId;
    const userId = req.user?.id;
    const bot = await client_1.default.bot.findUnique({
        where: { id: botId },
        select: { userId: true, teamId: true },
    });
    if (!bot)
        throw new httpMainError_1.default('Bot not found!', 404, 'Not found error', null);
    let isAuthorized = false;
    if (bot.userId === userId) {
        isAuthorized = true;
    }
    else if (bot.teamId) {
        const teamMember = await client_1.default.teamMember.findFirst({
            where: { teamId: bot.teamId, userId },
        });
        if (teamMember)
            isAuthorized = true;
    }
    if (!isAuthorized)
        throw new httpMainError_1.default('Unauthorized', 403, 'Authorization error', null);
    const chartData = await subscriberService.getLast7DaysSubscriberGrowth(botId);
    res.status(200).json({
        status: true,
        data: chartData,
    });
};
exports.subscriberGrowthChartController = subscriberGrowthChartController;
