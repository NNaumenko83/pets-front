/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

const TextStyled = styled.p`
    color: ${({ theme }) => (theme as any).palette?.text.secondary};
    text-align: center;
    font-family: 'Manrope Regular';
    font-size: 0.75rem;

    line-height: 1.25;
    letter-spacing: 0.03rem;
`

export default TextStyled
