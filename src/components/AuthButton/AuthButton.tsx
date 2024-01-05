/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode } from 'react'
import AuthButtonStyled from './AuthButton.styled'

interface IAuthButtonProps {
    children: ReactNode
    type?: 'button' | 'submit' | 'reset'
}

function AuthButton({ children, type = 'button' }: IAuthButtonProps) {
    return <AuthButtonStyled type={type}>{children}</AuthButtonStyled>
}

export default AuthButton
