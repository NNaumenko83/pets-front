/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import { MouseEvent, ReactNode } from 'react'
import ButtonStyled from './Button.styled'

interface ButtonProps {
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
    children: ReactNode
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

function Button({
    type = 'button',
    disabled = false,
    children,
    onClick,
    ...otherProps
}: ButtonProps) {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event)
        }
    }

    return (
        <ButtonStyled
            type={type}
            onClick={handleClick}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </ButtonStyled>
    )
}

export default Button
