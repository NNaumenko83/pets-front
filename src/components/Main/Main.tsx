import React, { ReactNode } from 'react'
import MainStyled from './Main.styled'

interface IMainProps {
    children: ReactNode
}

function Main({ children }: IMainProps): React.ReactElement {
    return <MainStyled>{children}</MainStyled>
}

export default Main
