import { ReactNode } from 'react'
import FormContentWrapperStyled from './FormContentWrapper.styled'

interface IFormContentWrapperProps {
    children: ReactNode
}

function FormContentWrapper({ children }: IFormContentWrapperProps) {
    return <FormContentWrapperStyled>{children}</FormContentWrapperStyled>
}

export default FormContentWrapper
