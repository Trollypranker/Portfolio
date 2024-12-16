import {z} from "zod";
 export const ContactSchema = z.object({
    name:z.string().min(4,{message:"Full Name required"}),
    email:z.string().email('Invalid email address'),
    contact:z.string().min(10, {message: "Contact number must be 10"}),
    message:z.string().min(2,"Message must be 50 words")
 });

 export type ContactSchemaState = z.infer<typeof ContactSchema>