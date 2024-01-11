import { useMatch } from 'react-router-dom'

import { ReactNode } from 'react'
import LinkStyled from './CustomLink.styled'

interface ICustomLinkProps {
    children: ReactNode
    to: string
}

function CustomLink({ children, to }: ICustomLinkProps) {
    const match = useMatch(to)

    const isMatched = match !== null

    return (
        <LinkStyled to={to} match={isMatched.toString()}>
            {children}
        </LinkStyled>
    )
}

export default CustomLink
