import prismaClient from '../../config/db/client';

export class SubscriberService {
  async create(
    chatId: string,
    username: string,
    firstName: string,
    lastName: string,
    botId: string
  ) {
    return await prismaClient.subscriber.create({
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

  async findSubscriberByChatIdandBotId(chatId: string, botId: string) {
    return await prismaClient.subscriber.findFirst({
      where: {
        chatId,
        botId,
      },
    });
  }

  async findManyBotSubscribers(botId: string) {
    return await prismaClient.subscriber.findMany({ where: { botId } });
  }

  async deleteSubscriberByChatId(chatId: string) {
    const sub = await prismaClient.subscriber.findFirst({ where: { chatId } });
    if (!sub) {
      return;
    }
    await prismaClient.subscriber.delete({
      where: {
        id: sub.id,
      },
    });
  }

  async totalBotSubsciberCount(botId: string) {
    return await prismaClient.subscriber.count({
      where: {
        botId,
      },
    });
  }

  async getLast7DaysSubscriberGrowth(botId: string) {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

    const data = await prismaClient.subscriber.groupBy({
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
