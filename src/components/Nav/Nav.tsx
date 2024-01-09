// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'
import NavWrapper from './Nav.styled'

function Nav() {
    return (
        <NavWrapper>
            <Link to="/news">News</Link>
            <Link to="/notices">Notices</Link>
            <Link to="/friends">Our friends</Link>
        </NavWrapper>
    )
}

export default Nav
