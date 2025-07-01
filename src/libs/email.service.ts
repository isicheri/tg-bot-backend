import { Resend } from 'resend';
import HttpMainError from './error/httpMainError';
import dotenv from 'dotenv';
import { logger } from '../app';

dotenv.config();

export class EmailService {
  private resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_SECRET);
  }

  sendMail() {}

  async receiveMail(
    message: string,
    email: string,
    name: string | undefined
  ): Promise<{ message: string; status: boolean } | HttpMainError> {
    try {
      const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111111; color: #F1F1F1; padding: 20px; border: 1px solid #2D2D2D; border-radius: 8px;">
  
  <h1 style="color: #6B3FCF; text-align: center;">New Feedback Received - TeleGraph</h1>
  
  <p><strong style="color: #F1F1F1;">Name:</strong> ${name?.toUpperCase()}</p>
  <p><strong style="color: #F1F1F1;">Email:</strong> ${email}</p>
  
  <h3 style="margin-top: 20px; color: #E08B2C;">Message:</h3>
  <p style="background: #1A1A1A; padding: 15px; border-radius: 5px; color: #F1F1F1;">${message}</p>
</div>
`;

      const res = await this.resend.emails.send({
        from: email,
        to: 'disicheri@gmail.com',
        subject: `New Feedback from ${name} - TeleGraph`,
        html,
      });
      console.log(res);
      return { message: 'email sent succefully', status: true };
    } catch (error) {
      logger.error(`'Error sending feedback email:'${error}`);
      throw new HttpMainError('Something went wrong!', 400, 'Email service error', error);
    }
  }
}
