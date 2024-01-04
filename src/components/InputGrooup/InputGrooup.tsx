import { ReactNode } from 'react'
import InputGroupStyled from './InputGrooup.styled'

interface IInputGroupProps {
    children: ReactNode
    error: boolean
}

function InputGroup({ children, error }: IInputGroupProps) {
    return <InputGroupStyled error={error}>{children}</InputGroupStyled>
}

export default InputGroup
