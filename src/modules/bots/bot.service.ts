import prismaClient from '../../config/db/client';

export class BotService {
  async createBot(
    name: string,
    username: string,
    userId: string,
    token: string,
    teamId: string | undefined
  ) {
    return await prismaClient.bot.create({
      data: {
        name,
        username,
        userId,
        token,
        teamId,
      },
    });
  }

  async findByToken(token: string) {
    return await prismaClient.bot.findUnique({ where: { token } });
  }

  async findById(id: string) {
    return await prismaClient.bot.findUnique({ where: { id } });
  }

  async getTotalbotsOwnedByUser(userId: string) {
    return await prismaClient.bot.count({ where: { userId } });
  }
}
