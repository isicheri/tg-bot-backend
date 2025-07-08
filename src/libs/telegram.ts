import TelegramBot from 'node-telegram-bot-api';

export class TelegramService {
  static initialize(token: string) {
    const telegramBot = new TelegramBot(token);
    return telegramBot;
  }

  async validateToken(token: string) {
    const bot = TelegramService.initialize(token);
    const botInfo = await bot.getMe();
    return botInfo;
  }

  async setWebhook(token: string, webHookUrl: string) {
    const bot = TelegramService.initialize(token);
    await bot.setWebHook(webHookUrl);
  }
}
