import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

const sanitize = (val: string) =>
  sanitizeHtml(val, {
    allowedTags: [],
    allowedAttributes: {},
  });

export const CreateBotSchema = z.object({
  token: z.string().transform(sanitize),
  teamId: z
    .string()
    .optional()
    .transform((val) => (val ? sanitize(val) : undefined)),
});
