import { Request, Response } from 'express';
import { SubscriberService } from './subscribers.service';
import HttpMainError from '../../libs/error/httpMainError';
import prismaClient from '../../config/db/client';

const subscriberService = new SubscriberService();

export const totalBotSubsciberCountController = async (req: Request, res: Response) => {
  const botId = req.params.botId;
  const userId = req.user?.id;
  if (!userId) throw new HttpMainError('Unauthorised', 403, 'Not found error', null);
  const { authorized, bot } = await isUserAuthorizedForBot(userId, botId);
  if (!bot) throw new HttpMainError('Bot not found!', 404, 'Not found error', null);

  if (!authorized) {
    throw new HttpMainError('Unauthorized', 403, 'Authorization error', null);
  }

  const count = await subscriberService.totalBotSubsciberCount(botId);
  res.status(200).json({
    status: true,
    data: count,
  });
};

const isUserAuthorizedForBot = async (userId: string, botId: string) => {
  const bot = await prismaClient.bot.findUnique({
    where: { id: botId },
    select: { userId: true, teamId: true },
  });

  if (!bot) return { authorized: false, bot: null };

  if (bot.userId === userId) return { authorized: true, bot };

  if (bot.teamId) {
    const teamMember = await prismaClient.teamMember.findFirst({
      where: {
        teamId: bot.teamId,
        userId,
      },
    });
    if (teamMember) return { authorized: true, bot };
  }

  return { authorized: false, bot };
};

export const getSubscriberGrowthRate = async (req: Request, res: Response) => {
  const botId = req.params.botId;
  const period = req.query.period || 'week';

  const now = new Date();
  let lastPeriodStart, currentPeriodStart;

  if (period === 'year') {
    currentPeriodStart = new Date(now.getFullYear(), 0, 1);
    lastPeriodStart = new Date(now.getFullYear() - 1, 0, 1);
  } else if (period === 'month') {
    currentPeriodStart = new Date(now.getFullYear(), now.getMonth(), 1);
    lastPeriodStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  } else {
    currentPeriodStart = new Date();
    currentPeriodStart.setDate(now.getDate() - 7);
    lastPeriodStart = new Date();
    lastPeriodStart.setDate(now.getDate() - 14);
  }
  const previousCount = await prismaClient.subscriber.count({
    where: { botId, createdAt: { gte: lastPeriodStart, lt: currentPeriodStart } },
  });

  const currentCount = await prismaClient.subscriber.count({
    where: { botId, createdAt: { gte: currentPeriodStart } },
  });
  const growthRate =
    previousCount === 0 ? 100 : ((currentCount - previousCount) / previousCount) * 100;

  res.json({
    currentCount,
    previousCount,
    growthRate: Number(growthRate.toFixed(2)),
  });
};

export const subscriberGrowthChartController = async (req: Request, res: Response) => {
  const botId = req.params.botId;
  const userId = req.user?.id;
  const bot = await prismaClient.bot.findUnique({
    where: { id: botId },
    select: { userId: true, teamId: true },
  });
  if (!bot) throw new HttpMainError('Bot not found!', 404, 'Not found error', null);

  let isAuthorized = false;
  if (bot.userId === userId) {
    isAuthorized = true;
  } else if (bot.teamId) {
    const teamMember = await prismaClient.teamMember.findFirst({
      where: { teamId: bot.teamId, userId },
    });
    if (teamMember) isAuthorized = true;
  }

  if (!isAuthorized) throw new HttpMainError('Unauthorized', 403, 'Authorization error', null);

  const chartData = await subscriberService.getLast7DaysSubscriberGrowth(botId);
  res.status(200).json({
    status: true,
    data: chartData,
  });
};
