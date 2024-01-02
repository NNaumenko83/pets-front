// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to="/news">News</Link>
            <Link to="/notices">Notices</Link>
            <Link to="/friends">Friends</Link>
        </div>
    )
}

export default Nav
