import { Request, Response } from 'express';
import prismaClient from '../../config/db/client';
import { UserService } from './user.service';
import HttpMainError from '../../libs/error/httpMainError';

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
