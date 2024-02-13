import React from 'react'
import StyledButton from './Button.styled'

type ButtonProps = {
    type: 'button' | 'submit' | 'reset'
    onClick: () => void
    children: React.ReactNode
}

function Button({ children, type, onClick }: ButtonProps) {
    return (
        <StyledButton type={type} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button
