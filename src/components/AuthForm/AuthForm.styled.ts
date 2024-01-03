/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled'

const Form = styled.form`
    padding: 3.75rem 4.6875rem;
    width: 38rem;
    height: 33.5625rem;
    border-radius: 2.5rem;
    background-color: ${({ theme }) =>
        (theme as any).colors?.formBackgroundColor};
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`

export default Form
