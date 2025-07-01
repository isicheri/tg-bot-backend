"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
const client_1 = __importDefault(require("../../config/db/client"));
class FeedbackService {
    async create(message, email) {
        const feedback = await client_1.default.feedback.create({
            data: {
                message,
                email,
            },
        });
        return feedback;
    }
}
exports.FeedbackService = FeedbackService;
