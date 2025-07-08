"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserOwnedTeamCountController = exports.getUserbotsPersonalandTeamController = void 0;
const client_1 = __importDefault(require("../../config/db/client"));
const user_service_1 = require("./user.service");
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
const userService = new user_service_1.UserService();
const getUserbotsPersonalandTeamController = async (req, res) => {
    const userId = req.user?.id;
    const personalBots = await client_1.default.bot.findMany({ where: { userId } });
    const teamMemberships = await client_1.default.teamMember.findMany({ where: { userId } });
    const teamIds = teamMemberships.map((tm) => tm.teamId);
    const teamBots = await client_1.default.bot.findMany({ where: { teamId: { in: teamIds } } });
    res.status(200).json({ userBot: [...personalBots, ...teamBots] });
};
exports.getUserbotsPersonalandTeamController = getUserbotsPersonalandTeamController;
const getUserOwnedTeamCountController = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new httpMainError_1.default('User not found', 404, 'Not Found Error', null);
    }
    const count = await userService.getUserOwnedTeamCount(userId);
    res.status(200).json({
        status: true,
        data: count,
    });
};
exports.getUserOwnedTeamCountController = getUserOwnedTeamCountController;
