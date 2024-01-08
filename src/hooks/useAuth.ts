import { useAppSelector } from 'src/redux/hooks'

import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
    selectIsShowModalCongrats,
} from '../redux/auth/selectors'

const useAuth = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const isRefreshing = useAppSelector(selectIsRefreshing)
    const isShowModalCongrats = useAppSelector(selectIsShowModalCongrats)
    const user = useAppSelector(selectUser)

    return {
        isLoggedIn,
        isRefreshing,
        isShowModalCongrats,
        user,
    }
}

export default useAuth
