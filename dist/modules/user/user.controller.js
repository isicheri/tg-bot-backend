"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetUserPasswordController = exports.forgotPasswordController = exports.getUserOwnedTeamCountController = exports.getUserbotsPersonalandTeamController = void 0;
const client_1 = __importDefault(require("../../config/db/client"));
const user_service_1 = require("./user.service");
const jwt_service_1 = require("../../libs/jwt.service");
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
const user_validation_1 = require("./user.validation");
const helpers_1 = require("../../libs/helpers");
const redis_config_1 = __importDefault(require("../../config/redis/redis.config"));
const userService = new user_service_1.UserService();
const getUserbotsPersonalandTeamController = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    const cacheKey = `user_bots_${userId}`;
    const cachedBots = await redis_config_1.default.get(cacheKey);
    if (cachedBots) {
        res.status(200).json({ userBot: JSON.parse(cachedBots), cached: true });
        return;
    }
    const personalBots = await client_1.default.bot.findMany({ where: { userId } });
    const teamMemberships = await client_1.default.teamMember.findMany({ where: { userId } });
    const teamIds = teamMemberships.map((tm) => tm.teamId);
    const teamBots = await client_1.default.bot.findMany({ where: { teamId: { in: teamIds } } });
    const bots = [...personalBots, ...teamBots];
    await redis_config_1.default.set(cacheKey, JSON.stringify(bots), 'EX', 120);
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
const forgotPasswordController = async (req, res) => {
    const parsedBody = await user_validation_1.forgotPasswordUserSchema.safeParseAsync(req.body);
    if (!parsedBody.success) {
        const formattedErrors = parsedBody.error.errors.map((e) => ({
            field: e.path[0],
            message: e.message,
        }));
        throw new httpMainError_1.default(formattedErrors[0].message || 'Validation failed', 400, parsedBody.error.name || 'validation error', formattedErrors);
    }
    const user = await userService.findUserByUsername(parsedBody.data.username);
    if (!user) {
        throw new httpMainError_1.default('user does not exist', 400, 'Authentication error', null);
    }
    const token = new jwt_service_1.JsonwebtokenService().signToken({ username: user.username });
    res.status(200).json({
        status: true,
        message: 'sent a link to user: ' + parsedBody.data.email,
        link: `/user/reset-password?${token}`,
    });
};
exports.forgotPasswordController = forgotPasswordController;
const resetUserPasswordController = async (req, res) => {
    const parsedBody = await user_validation_1.resetUserSchema.safeParseAsync(req.body);
    if (!parsedBody.success) {
        const formattedErrors = parsedBody.error.errors.map((e) => ({
            field: e.path[0],
            message: e.message,
        }));
        throw new httpMainError_1.default(formattedErrors[0].message || 'Validation failed', 400, parsedBody.error.name || 'validation error', formattedErrors);
    }
    const token = req.query.resetToken;
    if (!token)
        throw new httpMainError_1.default('Invalid Session,Try again!', 400, 'Token not found error', null);
    const verifyToken = new jwt_service_1.JsonwebtokenService().verifyToken(token);
    if (!verifyToken) {
        throw new httpMainError_1.default('Session has expired,Try again!', 400, 'Token Verification error', null);
    }
    const passwordHash = await (0, helpers_1.hashPassword)(parsedBody.data.password);
    await userService.updateUserPassword(verifyToken.username, passwordHash);
    res.status(201).json({
        message: 'user successfully changed password',
    });
};
exports.resetUserPasswordController = resetUserPasswordController;
