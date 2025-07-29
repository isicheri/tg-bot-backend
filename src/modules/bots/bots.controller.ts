import { Request, Response } from 'express';
import { BotService } from './bot.service';
import { TelegramService } from '../../libs/telegram';
import { CreateBotSchema } from './bot.validation';
import HttpMainError from '../../libs/error/httpMainError';
import { SubscriberService } from '../subscribers/subscribers.service';
import { logger } from '../../app';
import prismaClient from '../../config/db/client';

const botService = new BotService();
const telegramService = new TelegramService();
const subscriberService = new SubscriberService();

export const createBotController = async (req: Request, res: Response) => {
  const parsedBody = await CreateBotSchema.safeParseAsync(req.body);
  if (!parsedBody.success) {
    const formattedErrors = parsedBody.error?.errors.map((e) => ({
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
  const botToken = parsedBody.data.token;
  const teamId = parsedBody.data.teamId;

  const botInfo = await telegramService.validateToken(botToken);
  if (!botInfo.id) {
    throw new HttpMainError('Invalid bot token!', 400, 'Validation Error', null);
  }
  if (!botInfo.username) {
    throw new HttpMainError('Bot username not found', 400, 'Validation error', null);
  }
  const name = botInfo.first_name;
  const username = botInfo.username;

  const findBot = await botService.findByToken(botToken);
  if (findBot) throw new HttpMainError('Bot already exist', 400, 'Duplicate Schema Error', null);
  if (!req.user?.id) {
    throw new HttpMainError('Invalid user', 400, 'Invalid User Error', null);
  }

  const createdBot = await botService.createBot(name, username, req.user.id, botToken, teamId);
  const webhookUrl = process.env.MAIN_URL + '/api/bot/webhook/' + createdBot.id;
  await telegramService.setWebhook(botToken, webhookUrl);
  res.status(200).json({
    success: true,
    message: 'Bot created successfully',
  });
};

export const getUserBotCount = async (req: Request, res: Response) => {
  const id = req.user?.id;
  if (!id) return;
  const botCount = await botService.getTotalbotsOwnedByUser(id);
  res.status(200).json({
    success: true,
    message: 'Bot created successfully',
    count: botCount,
  });
};

export const veiwBotInfoController = async (req: Request, res: Response) => {
  const botId = req.params.botId;
  const bot = await prismaClient.bot.findFirst({
    where: { id: botId },
    select: {
      name: true,
      username: true,
      team: {
        select: {
          name: true,
        },
      },
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  res.status(200).json({ status: true, botInfo: bot });
};

export const webhookController = async (req: Request, res: Response) => {
  const id = req.params.botId;
  const findBot = await botService.findById(id);
  if (!findBot) {
    logger.error('Bot Not found');
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
    const existingSubscriber = await subscriberService.findSubscriberByChatIdandBotId(
      chatId.toString(),
      findBot.id
    );
    if (!existingSubscriber) {
      await subscriberService.create(chatId.toString(), username, firstName, lastName, findBot.id);
      const botInit = TelegramService.initialize(findBot.token);
      await botInit.sendMessage(chatId, "🎉 Welcome! You've been subscribed.");
    }
  }
  res.sendStatus(200);
  return;
};
