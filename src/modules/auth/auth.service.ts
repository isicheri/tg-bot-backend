import prismaClient from '../../config/db/client';
import HttpMainError from '../../libs/error/httpMainError';
import { hashPassword } from '../../libs/helpers';

export class AuthServices {
  async register(username: string, password: string) {
    const existingUser = await prismaClient.user.findUnique({ where: { username } });
    if (existingUser)
      throw new HttpMainError('Username already taken!', 400, 'Registration Error', null);
    const hashed = await hashPassword(password);
    const newUser = await prismaClient.user.create({
      data: {
        username,
        password: hashed,
      },
    });
    return newUser;
  }
}
