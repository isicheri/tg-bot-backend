import { logger } from '../../app';
import prismaClient from '../../config/db/client';
import { TelegramService } from '../../libs/telegram';
import { SubscriberService } from '../subscribers/subscribers.service';

const subscriberService = new SubscriberService();

export class BroadCastService {
  async create(message: string, botId: string, successCount: number) {
    return await prismaClient.broadcast.create({ data: { message, botId, successCount } });
  }

  async sendBroadcast(token: string, chatId: string, message: string) {
    const bot = TelegramService.initialize(token);
    try {
      await bot.sendMessage(chatId, message);
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const err = error as { response?: { statusCode?: number } };
        if (err.response?.statusCode === 403) {
          logger.warn(`User ${chatId} blocked the bot.`);
          await subscriberService.deleteSubscriberByChatId(chatId);
        }
      }
      throw error;
    }
  }

  //TODO: create a new recent broadcast count to check for recents broadcast properly

  async getRecentBroadcasts(botId: string, limit = 5) {
    return await prismaClient.broadcast.findMany({
      where: { botId },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  async getBotBroadCastsCount(botId: string) {
    return await prismaClient.broadcast.count({
      where: {
        botId,
      },
    });
  }
}
