import { ReactNode } from 'react'
import ErrorMessageStyled from './ErrorMessage.styled'

interface IErrorMessageProps {
    children: ReactNode
}

function ErrorMessage({ children }: IErrorMessageProps) {
    return <ErrorMessageStyled>{children}</ErrorMessageStyled>
}

export default ErrorMessage
