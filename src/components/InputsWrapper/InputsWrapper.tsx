import { ReactNode } from 'react'
import InputsWrapperStyled from './InputsWrapper.styled'

interface IInputsWrapperProps {
    children: ReactNode
}

function InputsWrapper({ children }: IInputsWrapperProps) {
    return <InputsWrapperStyled>{children}</InputsWrapperStyled>
}

export default InputsWrapper
