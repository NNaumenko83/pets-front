import { useAppSelector } from 'src/redux/hooks'

import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
} from '../redux/auth/selectors'

const useAuth = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const isRefreshing = useAppSelector(selectIsRefreshing)
    const user = useAppSelector(selectUser)

    return {
        isLoggedIn,
        isRefreshing,
        user,
    }
}

export default useAuth
