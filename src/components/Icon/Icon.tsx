/* eslint-disable react/require-default-props */
import icons from '../../assets/icons_sprite.svg'
import StyledIcon from './Icon.styled'

interface IconProps {
    name: string
    width?: number
    height?: number
}

function Icon({ name, width = 24, height = 24 }: IconProps) {
    return (
        <StyledIcon width={width} height={height}>
            <use href={`${icons}#${name}`} />
        </StyledIcon>
    )
}

export default Icon
