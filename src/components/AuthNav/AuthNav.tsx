// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

function AuthNav() {
    return (
        <div>
            <Link to="/login">Log IN</Link>
            <Link to="/register">Registration</Link>
        </div>
    )
}

export default AuthNav
