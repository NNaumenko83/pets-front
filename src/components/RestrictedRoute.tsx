import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth'

interface IRestrictedRouteProps {
    redirectTo: string
}

function RestrictedRoute({ redirectTo = '/' }: IRestrictedRouteProps) {
    const location = useLocation()
    const pageFrom = location.state?.from?.pathname ?? redirectTo

    const { isLoggedIn } = useAuth()

    return isLoggedIn ? (
        <Navigate to={pageFrom} state={{ from: location }} />
    ) : (
        <Outlet />
    )
}

export default RestrictedRoute
