"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_handler_1 = require("../../libs/handlers/response.handler");
const feedback_controller_1 = require("./feedback.controller");
const feedBackRouter = (0, express_1.Router)();
feedBackRouter.post('/', (0, response_handler_1.responseHandler)(feedback_controller_1.createFeedback));
exports.default = feedBackRouter;
