import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

const sanitize = (val: string) =>
  sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {},
  });

export const forgotPasswordUserSchema = z.object({
  username: z.string().min(5, 'username cannot be less 5 characters').max(8).transform(sanitize),
  email: z.string().email(),
});

export const resetUserSchema = z.object({
  password: z.string().min(5, 'password cannot be less 5 characters').transform(sanitize),
});
