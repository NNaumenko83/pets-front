// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to="/news">News</Link>
            <Link to="/notices">Notices</Link>
            <Link to="/friends">Friends</Link>
        </nav>
    )
}

export default Nav
