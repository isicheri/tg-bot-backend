import { Request, Response } from 'express';
import prismaClient from '../../config/db/client';

// import { TeamsService } from "./teams.service";
import HttpMainError from '../../libs/error/httpMainError';
// import {  } from "./team.validation";

// const teamsService = new TeamsService();

export const getUserTeamsPersonalAndNotPersonal = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new HttpMainError('User Not Found', 404, 'Not_Found', null);
  }
  const user = await prismaClient.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      teamsOwned: {
        select: {
          id: true,
          name: true,
          ownerId: true,
        },
      },
    },
  });

  // Teams where the user is a member (but not the owner)
  const teamMemberships = await prismaClient.teamMember.findMany({
    where: { userId },
    select: { teamId: true },
  });

  const memberTeamIds = teamMemberships.map((tm) => tm.teamId);
  const nonOwnedTeams = await prismaClient.team.findMany({
    where: {
      id: { in: memberTeamIds },
      ownerId: { not: userId },
    },
    select: {
      id: true,
      name: true,
      ownerId: true,
    },
  });

  res.status(200).json({
    status: true,
    ownedTeams: user?.teamsOwned || [],
    memberTeams: nonOwnedTeams,
  });
};
