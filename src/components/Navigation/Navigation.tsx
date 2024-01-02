import AuthNav from '../AuthNav/AuthNav'
import Nav from '../Nav/Nav'
import UserNav from '../UserNav/UserNav'

function Navigation() {
    return (
        <nav>
            <Nav />
            <AuthNav />
            <UserNav />
        </nav>
    )
}

export default Navigation
