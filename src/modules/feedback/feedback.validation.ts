import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

const sanitize = (val: string) =>
  sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {},
  });

export const FeedBackSchema = z.object({
  name: z
    .string()
    .min(3, 'Name cannnot be less the 3 character')
    .optional()
    .transform((val) => (val ? sanitize(val) : undefined)),
  email: z.string().email().optional(),
  message: z
    .string({ message: 'Message cannot be empty' })
    .min(5, 'Feedback should be more than 5 characters long')
    .max(100),
});
