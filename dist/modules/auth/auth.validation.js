"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = void 0;
const zod_1 = require("zod");
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const sanitize = (val) => (0, sanitize_html_1.default)(val, {
    allowedTags: [],
    allowedAttributes: {},
});
exports.registerUserSchema = zod_1.z.object({
    username: zod_1.z.string().min(5, 'username cannot be less 5 characters').max(8).transform(sanitize),
    password: zod_1.z.string().min(5, 'password cannot be less 5 characters').transform(sanitize),
});
