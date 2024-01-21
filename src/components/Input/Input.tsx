/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import InputStyled from './Input.styled'

interface InputFieldProps<TFieldValues extends FieldValues> {
    id?: string | undefined
    type: string
    register: UseFormRegister<TFieldValues>
    placeholder: string
    name: Path<TFieldValues>
    disabled?: boolean | undefined
}

function Input<TFieldValues extends FieldValues>({
    id,
    type,
    register,
    placeholder,
    name,
    disabled,
}: InputFieldProps<TFieldValues>) {
    return (
        <InputStyled
            {...register(name)}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
        />
    )
}

Input.defaultProps = { id: undefined, disabled: false }

export default Input
