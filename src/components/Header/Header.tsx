import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import Navigation from '../Navigation/Navigation'
import { HeaderStyled, HeaderContainer } from './Header.styled'

function Header() {
    return (
        <HeaderStyled>
            <HeaderContainer>
                <Link to="/">
                    <Icon name="logo" width={162} height={28} />
                </Link>

                <Navigation />
            </HeaderContainer>
        </HeaderStyled>
    )
}

export default Header
