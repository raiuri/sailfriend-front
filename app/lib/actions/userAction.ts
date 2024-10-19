'use server'

import z from 'zod'
import { redirect } from 'next/navigation'

const FormSchema = z.object({
    email: z.string({
        invalid_type_error: 'Email inválido',
    }).email().min(5),
    password1: z.string().min(8),
    password2: z.string().min(8),

})

const API_URL = 'http://localhost:8000' // Consider move it to environment variables

export type State = {
    errors?: {
        email?: string[];
        password1?: string[];
        password2?: string[];
    };
    message?: string | null;
}

export async function createAccount(_prevState: State, formData: FormData) {
    const validatedFields = FormSchema.safeParse({
        email: formData.get('email'),
        password1: formData.get('password1'),
        password2: formData.get('password2'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.'
        }
    }

    const input = validatedFields.data
    
    try {
        await fetch(`${API_URL}/api/registration/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(input)
        })
    } catch (error) {
        return {
            message: "Error inesperado"
        }
    }

    // redirect('/confirm/password')
    return { message: 'success' }
}