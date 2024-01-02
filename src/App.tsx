import 'src/App.css'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import MainPage from './pages/MainPage/MainPage'
import SharedLayout from './components/SharedLayout/SharedLayout'

const OurFriendsPage = lazy(
    () => import('./pages/OurFriendsPage/OurFriendsPage'),
)
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'))
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'))

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))

const UserPage = lazy(() => import('./pages/UserPage/UserPage'))

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="notices" element={<NoticesPage />} />
                    <Route path="friends" element={<OurFriendsPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="user" element={<UserPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
