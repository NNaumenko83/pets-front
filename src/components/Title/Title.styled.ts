/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

const TitleStyled = styled.h2`
    color: ${({ theme }) => (theme as any).palette?.text.primary};
    text-align: center;
    font-family: 'Manrope Medium';
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
`
export default TitleStyled
