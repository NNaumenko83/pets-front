import useAuth from 'src/hooks/useAuth'
import AuthNav from '../AuthNav/AuthNav'
import Nav from '../Nav/Nav'
import UserNav from '../UserNav/UserNav'
import NavigationStyled from './Navigation.styled'

function Navigation() {
    const { isLoggedIn } = useAuth()
    return (
        <NavigationStyled>
            <Nav />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
        </NavigationStyled>
    )
}

export default Navigation
