import styled from '@emotion/styled'

type ILabelProps = {
    checked: boolean
}

export const Label = styled.label<ILabelProps>`
    color: ${props => (props.checked ? 'red' : 'black')};
`
export const StepsWrapper = styled.div`
    display: flex;
`

export const StyledAddPetForm = styled.form`
    width: 28.625rem;
    height: 33.875rem;
    padding: 1.25rem 2rem;
    border-radius: 2.5rem;
    background-color: ${({ theme }) =>
        (theme as any).colors?.formBackgroundColor};
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`
