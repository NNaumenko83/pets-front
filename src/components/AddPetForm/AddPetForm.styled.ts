import styled from '@emotion/styled'

type ILabelProps = {
    checked: boolean
}

const Label = styled.label<ILabelProps>`
    color: ${props => (props.checked ? 'red' : 'black')};
`

export default Label
