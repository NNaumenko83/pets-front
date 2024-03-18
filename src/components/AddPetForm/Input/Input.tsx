import { StyledInput } from './Input.styled'

interface InputProps {
    id: string
    name: string
    type: string
    placeholder: string
}

function Input({ id, name, type, placeholder }: InputProps) {
    return (
        <StyledInput
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input
