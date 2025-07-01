import { Request, Response } from 'express';
import { FeedbackService } from './feedback.service';
import { FeedBackSchema } from './feedback.validation';
import HttpMainError from '../../libs/error/httpMainError';
import { EmailService } from '../../libs/email.service';
import { logger } from '../../app';

const feedBackService = new FeedbackService();
const emailService = new EmailService();

export const createFeedback = async (req: Request, res: Response): Promise<void> => {
  const parsedData = await FeedBackSchema.safeParseAsync(req.body);
  if (!parsedData.success) {
    const formattedErrors = parsedData.error.errors.map((e) => ({
      field: e.path[0],
      message: e.message,
    }));
    throw new HttpMainError(
      formattedErrors[0]?.message || 'Validation failed',
      400,
      parsedData.error.name || 'validation error',
      formattedErrors
    );
  }

  const { name, email, message } = parsedData.data;
  await feedBackService.create(message, email);
  if (email) {
    try {
      await emailService.receiveMail(message, email, name);
      logger.success('Email sent successfully');
    } catch (error) {
      logger.error(`Email service error: ${error}`);
      throw new HttpMainError('Something went wrong with email service', 500, 'EmailError', error);
    }
  }
  res.status(201).json({ success: true, message: 'feedback sent successfully' });
};
