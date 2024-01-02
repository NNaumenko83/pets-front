import React, { ReactNode } from 'react'
import MainStyled from './Main.styled'
import Container from '../Container/Container'

interface IMainProps {
    children: ReactNode
}

function Main({ children }: IMainProps): React.ReactElement {
    return (
        <MainStyled>
            <Container> {children}</Container>
        </MainStyled>
    )
}

export default Main
