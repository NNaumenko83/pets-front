// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom'
import { lazy, useEffect } from 'react'
import MainPage from './pages/MainPage/MainPage'
import SharedLayout from './components/SharedLayout/SharedLayout'
import RestrictedRoute from './components/RestrictedRoute'
import PrivateRoute from './components/PrivateRoute'
import { useAppDispatch } from './redux/hooks'
import { refreshUser } from './redux/auth/operations'
import useAuth from './hooks/useAuth'

const OurFriendsPage = lazy(
    () => import('./pages/OurFriendsPage/OurFriendsPage'),
)
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'))
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'))

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))

const UserPage = lazy(() => import('./pages/UserPage/UserPage'))

const AddPet = lazy(() => import('./pages/AddPetPage/AddPetPage'))

function App() {
    const dispatch = useAppDispatch()

    const { isRefreshing } = useAuth()

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])

    return isRefreshing ? (
        'Fetching user data'
    ) : (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<MainPage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="notices" element={<NoticesPage />} />
                <Route path="friends" element={<OurFriendsPage />} />
                <Route element={<RestrictedRoute redirectTo="/user" />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="user" element={<UserPage />} />
                    <Route path="add-pet" element={<AddPet />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
