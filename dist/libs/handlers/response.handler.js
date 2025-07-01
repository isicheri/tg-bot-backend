"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHandler = void 0;
const zod_1 = require("zod");
const httpMainError_1 = __importDefault(require("../error/httpMainError"));
const responseHandler = (method) => async (req, res, next) => {
    try {
        await method(req, res, next);
    }
    catch (error) {
        let exceptions;
        if (error instanceof httpMainError_1.default) {
            exceptions = error;
        }
        else {
            if (error instanceof zod_1.ZodError) {
                exceptions = new httpMainError_1.default('input validation error', 402, 'validation error', error);
            }
            else {
                exceptions = new httpMainError_1.default('something went wrong!', 500, 'server error', error);
            }
        }
        next(exceptions);
    }
};
exports.responseHandler = responseHandler;
