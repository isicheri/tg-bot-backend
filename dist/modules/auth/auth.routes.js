"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const response_handler_1 = require("../../libs/handlers/response.handler");
const authRouter = (0, express_1.Router)();
authRouter.post('/register', (0, response_handler_1.responseHandler)(auth_controller_1.register));
authRouter.post('/login', (0, response_handler_1.responseHandler)(auth_controller_1.login));
exports.default = authRouter;
