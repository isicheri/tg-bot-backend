import {z} from "zod";
import sanitizeHtml from "sanitize-html";

const sanitize = (val: string) => sanitizeHtml(val,{
allowedTags:[],
allowedAttributes: {}
})

export const registerUserSchema = z.object({
    username: z.string().min(5,"username cannot be less 5 characters").max(8).transform(sanitize),
    password: z.string().min(5,"username cannot be less 5 characters").transform(sanitize)
})