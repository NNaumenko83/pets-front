import useAuth from 'src/hooks/useAuth'
import AuthNav from '../AuthNav/AuthNav'
import Nav from '../Nav/Nav'
import UserNav from '../UserNav/UserNav'

function Navigation() {
    const { isLoggedIn } = useAuth()
    return (
        <nav>
            <Nav />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
        </nav>
    )
}

export default Navigation
