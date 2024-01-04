import { ReactNode } from 'react'
import InputErrorWrapperStyled from './InputErrorWrapper.styled'

interface IInputsWrapperProps {
    children: ReactNode
}

function InputErrorWrapper({ children }: IInputsWrapperProps) {
    return <InputErrorWrapperStyled>{children}</InputErrorWrapperStyled>
}

export default InputErrorWrapper
