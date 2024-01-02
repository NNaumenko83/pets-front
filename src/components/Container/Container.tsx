import React, { ReactNode } from 'react'
import ContainerStyled from './Container.styled'

interface IContainerProps {
    children: ReactNode
}

function Container({ children }: IContainerProps): React.ReactElement {
    return <ContainerStyled>{children}</ContainerStyled>
}

export default Container
