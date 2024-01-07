import { Navigate, Outlet } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth'

interface IRestrictedRouteProps {
    redirectTo: string
}

function RestrictedRoute({ redirectTo = '/' }: IRestrictedRouteProps) {
    const { isLoggedIn } = useAuth()

    return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />
}

export default RestrictedRoute
