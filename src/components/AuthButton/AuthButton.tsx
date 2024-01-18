/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode, MouseEvent } from 'react'
import AuthButtonStyled from './AuthButton.styled'

interface IAuthButtonProps {
    children: ReactNode
    type?: 'button' | 'submit' | 'reset'
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

function AuthButton({ children, type = 'button', onClick }: IAuthButtonProps) {
    return (
        <AuthButtonStyled type={type} onClick={onClick}>
            {children}
        </AuthButtonStyled>
    )
}

export default AuthButton
