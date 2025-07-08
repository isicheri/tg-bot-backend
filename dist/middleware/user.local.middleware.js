"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachUserToLocals = void 0;
const user_service_1 = require("../modules/user/user.service");
const httpMainError_1 = __importDefault(require("../libs/error/httpMainError"));
const app_1 = require("../app");
const attachUserToLocals = async (req, res, next) => {
    const userService = new user_service_1.UserService();
    try {
        if (!req.user?.id) {
            throw new httpMainError_1.default('Not Authorized', 403, 'authorisation error', null);
        }
        const user = await userService.findUserById(req.user.id);
        app_1.logger.info('from here error');
        res.locals.username = user?.username;
        res.locals.profilePic = user?.profileImg;
        res.locals.id = user?.id;
        next();
    }
    catch (error) {
        return res.render('error', { message: error.message });
    }
};
exports.attachUserToLocals = attachUserToLocals;
