/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, LinkProps } from 'react-router-dom'

import styled from '@emotion/styled'

interface ILinkStyledProps extends LinkProps {
    match: string
}

const AuthLinkStyled = styled(Link)<ILinkStyledProps>`
    display: flex;

    width: 10.3125rem;
    padding: 0.5rem 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-family: 'Manrope Medium';
    font-size: 20px;

    line-height: 1.35;
    letter-spacing: 0.8px;

    border-radius: 40px;
    border: 2px solid #ffc107;
    background: ${({ theme, match }) =>
        match === 'true'
            ? (theme as any).colors?.authLinkCurrentBgColor
            : (theme as any).colors?.authLinkBgColor};

    color: ${({ theme, match }) =>
        match === 'true'
            ? (theme as any).colors?.authLinkCurrentColor
            : (theme as any).colors?.authLinkTextColor};

    transition: all 200ms linear;
    &:hover,
    &:focus {
        color: ${({ theme }) => (theme as any).colors?.authLinkCurrentColor};
        background: ${({ theme }) =>
            (theme as any).colors?.authLinkCurrentBgColor};
    }
`

export default AuthLinkStyled
