import { ReactNode } from 'react'
import InputGroupStyled from './InputGrooup.styled'

interface IInputGroupProps {
    children: ReactNode
}

function InputGroup({ children }: IInputGroupProps) {
    return <InputGroupStyled>{children}</InputGroupStyled>
}

export default InputGroup
