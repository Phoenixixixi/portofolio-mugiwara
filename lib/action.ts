'use server'
import { sql } from "@/app/config/db";
import z from "zod";
import type { State } from "@/types";

const Messageschema = z.object({
    id: z.string(),
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().min(1, {
        message: "Email is required"
    }).email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
}).omit({ id: true })





export async function sendMessage(prevState: State | null, formData: FormData) {
    const validate = Messageschema.safeParse({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    })

    if (!validate.success) {
        return {
            errors: validate.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        }
    }

    const { name, email, message } = validate.data;


    try {
        await sql`
      INSERT INTO messages_table (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;
        return {
            message: 'Message sent successfully!'
        }
    } catch (err) {
        console.error(err)
        return {
            message: 'Database Error : failed to send a message'
        }
    }

}