"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedBackSchema = void 0;
const zod_1 = require("zod");
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const sanitize = (val) => (0, sanitize_html_1.default)(val, {
    allowedTags: [],
    allowedAttributes: {},
});
exports.FeedBackSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(3, 'Name cannnot be less the 3 character')
        .optional()
        .transform((val) => (val ? sanitize(val) : undefined)),
    email: zod_1.z.string().email().optional(),
    message: zod_1.z
        .string({ message: 'Message cannot be empty' })
        .min(5, 'Feedback should be more than 5 characters long')
        .max(100),
});
