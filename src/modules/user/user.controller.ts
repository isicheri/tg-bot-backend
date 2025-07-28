import { Request, Response } from 'express';
import prismaClient from '../../config/db/client';
import { UserService } from './user.service';
import { JsonwebtokenService, Jwtpayload } from '../../libs/jwt.service';
import HttpMainError from '../../libs/error/httpMainError';
import { forgotPasswordUserSchema, resetUserSchema } from './user.validation';
import { hashPassword } from '../../libs/helpers';

const userService = new UserService();

export const getUserbotsPersonalandTeamController = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const personalBots = await prismaClient.bot.findMany({ where: { userId } });
  const teamMemberships = await prismaClient.teamMember.findMany({ where: { userId } });
  const teamIds = teamMemberships.map((tm) => tm.teamId);
  const teamBots = await prismaClient.bot.findMany({ where: { teamId: { in: teamIds } } });
  res.status(200).json({ userBot: [...personalBots, ...teamBots] });
};

export const getUserOwnedTeamCountController = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new HttpMainError('User not found', 404, 'Not Found Error', null);
  }
  const count = await userService.getUserOwnedTeamCount(userId);
  res.status(200).json({
    status: true,
    data: count,
  });
};

export const forgotPasswordController = async (req: Request, res: Response) => {
  const parsedBody = await forgotPasswordUserSchema.safeParseAsync(req.body);
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
  const user = await userService.findUserByUsername(parsedBody.data.username);
  if (!user) {
    throw new HttpMainError('user does not exist', 400, 'Authentication error', null);
  }
  const token = new JsonwebtokenService().signToken({ username: user.username });
  res.status(200).json({
    status: true,
    message: 'sent a link to user: ' + parsedBody.data.email,
    link: `/user/reset-password?${token}`,
  });
};

export const resetUserPasswordController = async (req: Request, res: Response) => {
  const parsedBody = await resetUserSchema.safeParseAsync(req.body);
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
  const token = req.query.resetToken as string;
  if (!token)
    throw new HttpMainError('Invalid Session,Try again!', 400, 'Token not found error', null);
  const verifyToken: Jwtpayload = new JsonwebtokenService().verifyToken(token);
  if (!verifyToken) {
    throw new HttpMainError(
      'Session has expired,Try again!',
      400,
      'Token Verification error',
      null
    );
  }
  const passwordHash = await hashPassword(parsedBody.data.password);

  await userService.updateUserPassword(verifyToken.username, passwordHash);
  res.status(201).json({
    message: 'user successfully changed password',
  });
};
