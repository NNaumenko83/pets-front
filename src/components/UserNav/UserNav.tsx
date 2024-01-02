// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

function UserNav() {
    return (
        <div>
            <Link to="/user">User</Link>
            <button type="button"> Log OUT</button>
        </div>
    )
}

export default UserNav
