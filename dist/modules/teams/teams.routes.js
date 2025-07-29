"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_handler_1 = require("../../libs/handlers/response.handler");
const teams_controller_1 = require("./teams.controller");
const teamRouter = (0, express_1.Router)();
teamRouter.get('/user/teams', (0, response_handler_1.responseHandler)(teams_controller_1.getUserTeamsPersonalAndNotPersonal));
exports.default = teamRouter;
