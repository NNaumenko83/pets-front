import Icon from '../Icon/Icon'
import Navigation from '../Navigation/Navigation'
import { HeaderStyled, HeaderContainer } from './Header.styled'

function Header() {
    return (
        <HeaderStyled>
            <HeaderContainer>
                <Icon name="logo" width={162} height={28} />
                <Navigation />
            </HeaderContainer>
        </HeaderStyled>
    )
}

export default Header
