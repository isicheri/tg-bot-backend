"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadCastSchema = void 0;
const zod_1 = require("zod");
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const sanitize = (val) => (0, sanitize_html_1.default)(val, {
    allowedTags: [],
    allowedAttributes: {},
});
exports.BroadCastSchema = zod_1.z.object({
    message: zod_1.z
        .string()
        .max(100, { message: 'message cannot be more than 100 characters' })
        .transform(sanitize)
        .refine((val) => val.trim().length > 0, {
        message: 'Message cannot be empty',
    }),
});
