"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./modules/user/user.routes"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const feedback_routes_1 = __importDefault(require("./modules/feedback/feedback.routes"));
const indexRouter = (0, express_1.Router)();
indexRouter.use('/auth', auth_routes_1.default);
indexRouter.use('/user', user_routes_1.default);
indexRouter.use('/feedback', feedback_routes_1.default);
exports.default = indexRouter;
