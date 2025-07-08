import { Request, Response } from 'express';
import { BotService } from '../bots/bot.service';
import { SubscriberService } from '../subscribers/subscribers.service';
import { BroadCastService } from './broadcast.service';
import HttpMainError from '../../libs/error/httpMainError';
import { logger } from '../../app';
import { BroadCastSchema } from './validation/broadcast.validation';

const botService = new BotService();
const subscriberService = new SubscriberService();
const broadCastService = new BroadCastService();

export const sendBroadcast = async (req: Request, res: Response) => {
  const parsedBody = await BroadCastSchema.safeParseAsync(req.body);
  if (!parsedBody.success) {
    const formattedErrors = parsedBody.error.errors.map((e) => ({
      field: e.path[0],
      message: e.message,
    }));
    throw new HttpMainError(
      formattedErrors[0].message || 'Validation failed',
      400,
      parsedBody.error.name || 'validation error',
      formattedErrors
    );
  }
  const botId = req.params.botId;
  const message = parsedBody.data.message;
  const findBot = await botService.findById(botId);
  if (!findBot) throw new HttpMainError('Bot not found', 400, 'Not Found', null);

  if (findBot.userId !== req.user?.id) {
    throw new HttpMainError('Unauthorized', 403, 'Forbidden', null);
  }

  const subscribers = await subscriberService.findManyBotSubscribers(botId);
  const batchSize = 20;
  let successCount = 0;
  for (let i = 0; i < subscribers.length; i += batchSize) {
    const batch = subscribers.slice(i, i + batchSize);
    const results = await Promise.allSettled(
      batch.map((subscriber) =>
        broadCastService.sendBroadcast(findBot.token, subscriber.chatId, message)
      )
    );
    results.forEach((result, idx) => {
      if (result.status === 'fulfilled') {
        successCount++;
      } else {
        logger.error(
          `Failed to send to ${batch[idx].chatId}: ${result.reason?.message || 'Unknown error'}`
        );
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

export const getRecentBroadcasts = async (req: Request, res: Response) => {
  const botId = req.params.botId;

  const findBot = await botService.findById(botId);
  if (!findBot) {
    throw new HttpMainError('Bot not found', 400, 'Not Found', null);
  }

  const broadcasts = await broadCastService.getRecentBroadcasts(botId);
  const subscriberCount = await subscriberService.totalBotSubsciberCount(botId);

  res.status(200).json({
    status: true,
    data: broadcasts,
    subscriberCount: subscriberCount,
  });
};

export const getBotBroadCastsCountController = async (req: Request, res: Response) => {
  const botId = req.params.botId;
  if (!botId) {
    throw new HttpMainError('Bot Not Found', 404, 'Not Found Error', null);
  }
  const count = await broadCastService.getBotBroadCastsCount(botId);
  res.status(200).json({
    status: true,
    data: count,
  });
};
