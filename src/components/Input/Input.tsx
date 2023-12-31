/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import InputStyled from './Input.styled'

interface InputFieldProps<TFieldValues extends FieldValues> {
    type: string
    register: UseFormRegister<TFieldValues>
    placeholder: string
    name: Path<TFieldValues>
}

function Input<TFieldValues extends FieldValues>({
    type,
    register,
    placeholder,
    name,
}: InputFieldProps<TFieldValues>) {
    return (
        <InputStyled
            {...register(name)}
            name={name}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input
