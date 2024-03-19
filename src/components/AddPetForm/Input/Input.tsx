/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { StyledInput } from './Input.styled'

interface InputProps {
    id: string
    name: string
    type: string
    placeholder: string
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { id, name, type, placeholder } = props

    return (
        <StyledInput
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            ref={ref}
        />
    )
})

export default Input
