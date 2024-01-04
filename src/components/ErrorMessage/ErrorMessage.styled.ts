/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */

import styled from '@emotion/styled'

const ErrorMessageStyled = styled.p`
    position: absolute;
    left: 1rem;
    top: 3.25rem;
    color: ${({ theme }) => (theme as any).palette?.error.main};
    font-family: 'Manrope Regular';
    font-size: 12px;
    line-height: 1.33;
`
export default ErrorMessageStyled
