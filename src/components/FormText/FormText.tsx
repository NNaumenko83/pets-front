import { Link } from 'react-router-dom'
import Text from './Text/Text'
import TextLinkWrapper from './FormText.styled'

type IFormTextProps = {
    text: string
    to: string
}

function FormText({ text, to }: IFormTextProps) {
    return (
        <TextLinkWrapper>
            <Text>{text}</Text>
            <Link to={to}>Login</Link>
        </TextLinkWrapper>
    )
}

export default FormText
