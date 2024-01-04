import { ReactNode } from 'react'

interface IInputRightAddonProps {
    children: ReactNode
}

function InputRightAddon({ children }: IInputRightAddonProps) {
    return <div>{children}</div>
}

export default InputRightAddon
