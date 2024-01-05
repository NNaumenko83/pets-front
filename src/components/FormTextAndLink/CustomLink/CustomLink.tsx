import { ReactNode } from 'react'
import LinkStyled from './CustomLink.styled'

type ILinkProps = {
    children: ReactNode
    to: string
}

function CustomLink({ children, to }: ILinkProps) {
    return <LinkStyled to={to}>{children}</LinkStyled>
}

export default CustomLink
