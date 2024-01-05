/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

type IInputGroupStyledProps = {
    error: boolean
}

const InputGroupStyled = styled.div<IInputGroupStyledProps>`
    display: flex;
    align-items: center;
    border-radius: 2.5rem;
    height: 48px;
    padding: 0.75rem 1rem;
    border: 1px solid
        ${props =>
            props.error
                ? (props.theme as any).palette?.error.main
                : (props.theme as any).colors?.inputBorderColor};
`

export default InputGroupStyled
