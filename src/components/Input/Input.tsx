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
    defaultValue?: string
}

function Input<TFieldValues extends FieldValues>({
    id,
    type,
    register,
    placeholder,
    name,
    disabled,
    defaultValue,
}: InputFieldProps<TFieldValues>) {
    return (
        <InputStyled
            {...register(name)}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
        />
    )
}

Input.defaultProps = { id: undefined, disabled: false, defaultValue: undefined }

export default Input
