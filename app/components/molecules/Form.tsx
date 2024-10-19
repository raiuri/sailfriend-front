import { ReactNode } from "react"

interface FormRootProps {
    children: ReactNode
    action: string
}

interface FormFieldProps {
    children: ReactNode
}

interface FormFooterProps {
    children: ReactNode
    className: string
}

const FormRoot = ({ children, action }: FormRootProps) => {
    return (
        <form action={action} className="bg-white px-8 py-4">
            {children}
        </form>
    )
}

const FormHeader = ({ title }: { title: string }) => {
    return <div className="text-black text-5xl pt-4 pb-6">{title}</div>
}

const FormFooter = ({ className, ...props }: FormFooterProps) => {
    return <div className={`py-4 ${className}`} {...props} />
}

const FormField = ({ ...props }: FormFieldProps) => {
    return (
       <div className="w-full m-auto p-2" {...props} />
    )
}

export { FormRoot, FormField, FormHeader, FormFooter }