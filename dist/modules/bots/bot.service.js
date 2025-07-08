"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const client_1 = __importDefault(require("../../config/db/client"));
class BotService {
    async createBot(name, username, userId, token, teamId) {
        return await client_1.default.bot.create({
            data: {
                name,
                username,
                userId,
                token,
                teamId,
            },
        });
    }
    async findByToken(token) {
        return await client_1.default.bot.findUnique({ where: { token } });
    }
    async findById(id) {
        return await client_1.default.bot.findUnique({ where: { id } });
    }
    async getTotalbotsOwnedByUser(userId) {
        return await client_1.default.bot.count({ where: { userId } });
    }
}
exports.BotService = BotService;
