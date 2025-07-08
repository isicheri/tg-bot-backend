"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBotSchema = void 0;
const zod_1 = require("zod");
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const sanitize = (val) => (0, sanitize_html_1.default)(val, {
    allowedTags: [],
    allowedAttributes: {},
});
exports.CreateBotSchema = zod_1.z.object({
    token: zod_1.z.string().transform(sanitize),
    teamId: zod_1.z
        .string()
        .optional()
        .transform((val) => (val ? sanitize(val) : undefined)),
});
