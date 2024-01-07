import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth'

function PrivateRoute() {
    const { isLoggedIn } = useAuth()
    const location = useLocation()

    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    )
}

export default PrivateRoute
