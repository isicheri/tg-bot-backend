"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiLogger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class ApiLogger {
    info(message) {
        console.info(`${chalk_1.default.bgGrey('info')}:${chalk_1.default.whiteBright(message.toUpperCase())}`);
    }
    success(message) {
        console.log(`${chalk_1.default.bgGreen('Success')}:${chalk_1.default.whiteBright(message.toUpperCase())}`);
    }
    warn(message) {
        console.warn(`${chalk_1.default.bgYellow('Warning')}:${chalk_1.default.whiteBright(message.toUpperCase())}`);
    }
    error(message) {
        console.error(`${chalk_1.default.bgRed('Error:')}:${chalk_1.default.whiteBright(message)}`);
    }
}
exports.ApiLogger = ApiLogger;
