/* eslint-disable import/no-extraneous-dependencies */
import styled from '@emotion/styled'
import ContainerStyled from '../Container/Container.styled'

export const HeaderStyled = styled.header`
    /* position: absolute; */
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    border: 1px solid red;
`

export const HeaderContainer = styled(ContainerStyled)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
