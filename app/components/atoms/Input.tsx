interface InputProps extends React.ComponentProps<'input'> {

}

const Input = ({ ...props }: InputProps) => {
    return (<input className="text-black bg-gray-200 border rounded-md border-gray-300 w-full p-2" {...props} />)
}

export { Input }