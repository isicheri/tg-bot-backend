"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedback = void 0;
const feedback_service_1 = require("./feedback.service");
const feedback_validation_1 = require("./feedback.validation");
const httpMainError_1 = __importDefault(require("../../libs/error/httpMainError"));
const email_service_1 = require("../../libs/email.service");
const app_1 = require("../../app");
const feedBackService = new feedback_service_1.FeedbackService();
const emailService = new email_service_1.EmailService();
const createFeedback = async (req, res) => {
    const parsedData = await feedback_validation_1.FeedBackSchema.safeParseAsync(req.body);
    if (!parsedData.success) {
        const formattedErrors = parsedData.error.errors.map((e) => ({
            field: e.path[0],
            message: e.message,
        }));
        throw new httpMainError_1.default(formattedErrors[0]?.message || 'Validation failed', 400, parsedData.error.name || 'validation error', formattedErrors);
    }
    const { name, email, message } = parsedData.data;
    await feedBackService.create(message, email);
    if (email) {
        try {
            await emailService.receiveMail(message, email, name);
            app_1.logger.success('Email sent successfully');
        }
        catch (error) {
            app_1.logger.error(`Email service error: ${error}`);
            throw new httpMainError_1.default('Something went wrong with email service', 500, 'EmailError', error);
        }
    }
    res.status(201).json({ success: true, message: 'feedback sent successfully' });
};
exports.createFeedback = createFeedback;
