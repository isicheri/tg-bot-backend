import prismaClient from '../../config/db/client';

export class FeedbackService {
  async create(message: string, email: string | undefined) {
    const feedback = await prismaClient.feedback.create({
      data: {
        message,
        email,
      },
    });
    return feedback;
  }
}
