"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTeamsPersonalAndNotPersonal = void 0;
const client_1 = __importDefault(require("../../config/db/client"));
// import { TeamsService } from "./teams.service";
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
// import {  } from "./team.validation";
// const teamsService = new TeamsService();
const getUserTeamsPersonalAndNotPersonal = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new httpMainError_1.default('User Not Found', 404, 'Not_Found', null);
    }
    const user = await client_1.default.user.findUnique({
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
    const teamMemberships = await client_1.default.teamMember.findMany({
        where: { userId },
        select: { teamId: true },
    });
    const memberTeamIds = teamMemberships.map((tm) => tm.teamId);
    const nonOwnedTeams = await client_1.default.team.findMany({
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
exports.getUserTeamsPersonalAndNotPersonal = getUserTeamsPersonalAndNotPersonal;
