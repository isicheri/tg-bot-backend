import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

const sanitize = (val: string) =>
  sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {},
  });

export const BroadCastSchema = z.object({
  message: z
    .string()
    .max(100, { message: 'message cannot be more than 100 characters' })
    .transform(sanitize)
    .refine((val) => val.trim().length > 0, {
      message: 'Message cannot be empty',
    }),
});
