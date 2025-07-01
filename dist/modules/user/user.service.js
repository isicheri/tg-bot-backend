"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = __importDefault(require("../../config/db/client"));
class UserService {
    createUser() { }
    async findUserByUsername(username) {
        return await client_1.default.user.findFirst({ where: { username } });
    }
    async findUserById(id) {
        return await client_1.default.user.findUnique({ where: { id } });
    }
}
exports.UserService = UserService;
