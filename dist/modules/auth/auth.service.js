"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const client_1 = __importDefault(require("../../config/db/client"));
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
const helpers_1 = require("../../libs/helpers");
class AuthServices {
    async register(username, password) {
        const existingUser = await client_1.default.user.findUnique({ where: { username } });
        if (existingUser)
            throw new httpMainError_1.default('Username already taken!', 400, 'Registration Error', null);
        const hashed = await (0, helpers_1.hashPassword)(password);
        const newUser = await client_1.default.user.create({
            data: {
                username,
                password: hashed,
            },
        });
        return newUser;
    }
}
exports.AuthServices = AuthServices;
