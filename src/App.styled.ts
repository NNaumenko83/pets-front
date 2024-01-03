/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

const AppStyled = styled.div`
    background: ${({ theme }) => (theme as any).colors?.main};
`

export default AppStyled
