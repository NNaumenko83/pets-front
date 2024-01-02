import Container from '../Container/Container'
import Navigation from '../Navigation/Navigation'
import HeaderStyled from './Header.styled'

function Header() {
    return (
        <HeaderStyled>
            <Container>
                <Navigation />
            </Container>
        </HeaderStyled>
    )
}

export default Header
