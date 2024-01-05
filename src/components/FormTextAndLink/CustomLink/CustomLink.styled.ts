/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const LinkStyled = styled(Link)`
    color: ${({ theme }) => (theme as any).colors?.formLinkTextColor};
    font-family: 'Manrope Regular';
    font-size: 0.75rem;
    line-height: 1.25;
    letter-spacing: 0.03rem;
    text-decoration-line: underline;
`

export default LinkStyled
