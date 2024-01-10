/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, LinkProps } from 'react-router-dom'

import styled from '@emotion/styled'

interface ILinkStyledProps extends LinkProps {
    match: string
}

const LinkStyled = styled(Link)<ILinkStyledProps>`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    color: ${({ theme }) => (theme as any).palette?.text.primary};
    font-family: 'Manrope Medium';
    font-size: 20px;

    line-height: 1.35;
    letter-spacing: 0.8px;

    color: ${({ theme, match }) =>
        match === 'true'
            ? (theme as any).colors?.linkCurrentColor
            : (theme as any).palette?.text.primary};

    transition: all 100ms linear;
    &:hover,
    &:focus {
        color: ${({ theme }) => (theme as any).colors?.linkCurrentColor};
    }
`

export default LinkStyled
