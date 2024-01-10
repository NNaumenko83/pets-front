/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    color: ${({ theme }) => (theme as any).colors?.iconsColor};
    background-color: ${({ theme }) =>
        (theme as any).palette?.background.default};

    :hover {
        color: ${({ theme }) => (theme as any).colors?.linkHovertColor};
    }
`

export default ButtonStyled
