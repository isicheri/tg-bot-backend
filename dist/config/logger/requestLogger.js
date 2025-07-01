"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const requestLoggerMiddleware = (req, res, next) => {
    const method = req.method;
    const url = req.originalUrl;
    const host = req.host;
    const timeStamp = new Date().toISOString();
    console.log(`${chalk_1.default.green(`request-time: ${timeStamp}`)} ${chalk_1.default.yellow(`request-method: ${method}`)} ${chalk_1.default.red(`request-url: ${host}${url}`)}`);
    next();
};
exports.default = requestLoggerMiddleware;
