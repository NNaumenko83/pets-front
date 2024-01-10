import { useMatch } from 'react-router-dom'

import { ReactNode } from 'react'
import LinkStyled from './CustomLink.styled'

interface ICustomLinkProps {
    children: ReactNode
    to: string
}

function CustomLink({ children, to }: ICustomLinkProps) {
    const match = useMatch(to)
    console.log('match:', match)
    const isMatched = match !== null
    console.log('isMatched:', isMatched)

    return (
        <LinkStyled to={to} match={isMatched.toString()}>
            {children}
        </LinkStyled>
    )
}

export default CustomLink
