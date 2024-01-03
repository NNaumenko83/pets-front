/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

const TitleStyled = styled.h2`
    color: ${({ theme }) => (theme as any).palette?.text.primary};
    text-align: center;
    font-family: 'Manrope Medium';
    font-size: 2.25rem;
    line-height: 1.36;
    letter-spacing: 0.09rem;
`
export default TitleStyled
