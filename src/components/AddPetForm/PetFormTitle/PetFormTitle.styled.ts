/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

const TitleStyled = styled.h2`
    color: ${({ theme }) => (theme as any).palette?.text.primary};
    font-family: 'Manrope Medium';
    font-size: 1.75rem;
    line-height: 1.36;
    letter-spacing: 0%;
    margin-bottom: 1.5rem;
`
export default TitleStyled
