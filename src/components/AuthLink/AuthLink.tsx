import { ReactNode } from 'react'
import { useMatch } from 'react-router-dom'
import AuthLinkStyled from './AuthLink.styled'

interface IAuthLinkProps {
    to: string
    children: ReactNode
}

function AuthLink({ children, to }: IAuthLinkProps) {
    const match = useMatch(to)
    const isMatched = match !== null

    return (
        <AuthLinkStyled to={to} match={isMatched.toString()}>
            {children}
        </AuthLinkStyled>
    )
}

export default AuthLink
