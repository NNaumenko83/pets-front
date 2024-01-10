/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled'

const ContainerStyled = styled.div`
    max-width: ${({ theme }) => (theme as any).breakpoints?.values.desktop};
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0 auto;
    overflow: hidden;
    height: 100%;
`

export default ContainerStyled
