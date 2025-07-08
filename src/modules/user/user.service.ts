import prismaClient from '../../config/db/client';

export class UserService {
  createUser() {}

  async findUserByUsername(username: string) {
    return await prismaClient.user.findFirst({ where: { username } });
  }

  async findUserById(id: string) {
    return await prismaClient.user.findUnique({ where: { id } });
  }

  async updateUserPassword(username: string, password: string) {
    return await prismaClient.user.update({ data: { password }, where: { username } });
  }

  async getUserOwnedTeamCount(userId: string) {
    return await prismaClient.team.count({
      where: {
        ownerId: userId,
      },
    });
  }
}
