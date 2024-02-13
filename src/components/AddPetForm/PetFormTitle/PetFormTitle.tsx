import { ReactNode } from 'react'
import TitleStyled from './PetFormTitle.styled'

interface ITitleProps {
    children: ReactNode
}

function PetFormTitle({ children }: ITitleProps) {
    return <TitleStyled>{children}</TitleStyled>
}

export default PetFormTitle
