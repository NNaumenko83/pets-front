/* eslint-disable react/require-default-props */

import Icon from '../Icon/Icon'
import EyeButtonStyled from './EyeButton.styled'

interface IEyeButtonProps {
    showPassword: boolean
    onClick?: () => void
}

function EyeButton({ onClick, showPassword }: IEyeButtonProps) {
    return (
        <EyeButtonStyled
            type="button"
            onClick={onClick}
            aria-label="show password"
        >
            {showPassword ? (
                <Icon name="eye-opened" width={24} height={24} />
            ) : (
                <Icon name="eye-closed" width={24} height={24} />
            )}
        </EyeButtonStyled>
    )
}

export default EyeButton
