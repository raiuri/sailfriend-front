'use client'

import { CtaButton } from '@/app/components/atoms/CtaButton'
import { createAccount } from '@/app/lib/actions/userAction'
// import { useActionState } from 'react'
import { useFormState } from 'react-dom'
import { State } from '@/app/lib/actions/userAction'
import { FormRoot, FormField, FormHeader, FormFooter } from '@/app/components/molecules/Form'
import { Input } from '@/app/components/atoms/Input'
import { Label } from '@/app/components/atoms/Label'
import { UserRound, CircleUser } from "lucide-react"

export const SignupForm = () => {
    const initialState: State = { message: null, errors: {} }
    const [state, formAction] = useFormState(createAccount, initialState)

    return (
        <FormRoot action={formAction}>
            <FormHeader title='Crie uma conta' />
            <FormField>
                <Label title="Email" />
                <Input type="text" name="email" />
            </FormField>
            <FormField>
                <Label title="Senha" />
                <Input type="password" name="password1" />
            </FormField>
            <FormField>
                <Label title="Repita a senha" />
                <Input type="password" name="password2" />
            </FormField>
            <FormFooter className="flex justify-center">
                <CtaButton size="large" iconLeft={CircleUser} text="Criar conta" />
            </FormFooter>
        </FormRoot>
    )
}