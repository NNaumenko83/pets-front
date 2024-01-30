import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth'

interface IRestrictedRouteProps {
    redirectTo: string
}

function RestrictedRoute({ redirectTo = '/' }: IRestrictedRouteProps) {
    const location = useLocation()

    const { isLoggedIn } = useAuth()

    return isLoggedIn ? (
        <Navigate
            to={location.state.from.pathname || redirectTo}
            state={{ from: location }}
        />
    ) : (
        <Outlet />
    )
}

export default RestrictedRoute
