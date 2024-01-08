import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth'

function PrivateRoute() {
    const { isLoggedIn, isRefreshing } = useAuth()
    const location = useLocation()
    const shouldRedirect = !isLoggedIn && !isRefreshing

    return shouldRedirect ? (
        <Navigate to="/login" state={{ from: location }} />
    ) : (
        <Outlet />
    )
}

export default PrivateRoute
