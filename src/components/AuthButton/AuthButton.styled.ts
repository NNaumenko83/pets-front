/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'
import Button from '../Button/Button'

const AuthButtonStyled = styled(Button)`
    display: flex;
    width: 100%;
    height: 3rem;
    padding: 0.625rem 1.75rem;
    justify-content: center;
    align-items: center;
    border-radius: 2.5rem;

    color: ${({ theme }) => (theme as any).colors?.authButtonTextColor};
    font-family: 'Manrope Bold';
    font-size: 1rem;
    line-height: 1.38;
    letter-spacing: 0.64px;

    background: ${({ theme }) =>
        (theme as any).colors?.authButtonBackgroundColor};

    &:hover,
    &:focus {
        background: ${({ theme }) =>
            (theme as any).colors?.buttonHoverBackgroundColor};
    }
`
export default AuthButtonStyled
