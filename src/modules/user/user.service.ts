import prismaClient from '../../config/db/client';

export class UserService {
  createUser() {}

  async findUserByUsername(username: string) {
    return await prismaClient.user.findFirst({ where: { username } });
  }

  async findUserById(id: string) {
    return await prismaClient.user.findUnique({ where: { id } });
  }
}
