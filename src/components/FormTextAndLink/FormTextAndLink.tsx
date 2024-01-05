import Text from './Text/Text'
import TextLinkWrapper from './FormTextAndLink.styled'
import CustomLink from './CustomLink/CustomLink'

type IFormTextAndLinkProps = {
    text: string
    textLink: string
    to: string
}

function FormTextAndLink({ text, to, textLink }: IFormTextAndLinkProps) {
    return (
        <TextLinkWrapper>
            <Text>{text}</Text>
            <CustomLink to={to}>{textLink}</CustomLink>
        </TextLinkWrapper>
    )
}

export default FormTextAndLink
