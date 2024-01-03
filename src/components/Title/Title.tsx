import { ReactNode } from 'react'
import TitleStyled from './Title.styled'

interface ITitleProps {
    children: ReactNode
}

function Title({ children }: ITitleProps) {
    return <TitleStyled>{children}</TitleStyled>
}

export default Title
