import { ReactNode } from 'react'
import TextStyled from './Text.styled'

type ITextProps = {
    children: ReactNode
}

function Text({ children }: ITextProps) {
    return <TextStyled>{children}</TextStyled>
}

export default Text
