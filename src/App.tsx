import 'src/App.css'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import SharedLayout from './components/SharedLayout/SharedLayout'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
