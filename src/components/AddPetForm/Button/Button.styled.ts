/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

const StyledButton = styled.button`
    width: 248px;
    height: 40px;

    display: flex;
    gap: 0.75rem;

    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.75rem;
    border-radius: 2.5rem;

    background: #54adff;
    margin-top: auto;

    font-family: 'Manrope Bold';
    font-size: 16px;
    line-height: 1.38;
    letter-spacing: 4%;

    color: #fef9f9;

    &:hover,
    &:focus {
        background: ${({ theme }) =>
            (theme as any).colors?.buttonHoverBackgroundColor};
    }
`

export default StyledButton
