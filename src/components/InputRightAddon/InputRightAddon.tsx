import { ReactNode } from 'react'
import RightAddon from './InputRightAddon.styled'

interface IInputRightAddonProps {
    children: ReactNode
}

function InputRightAddon({ children }: IInputRightAddonProps) {
    return <RightAddon>{children}</RightAddon>
}

export default InputRightAddon
