import { Suspense } from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function SharedLayout() {
    return (
        <div>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export default SharedLayout
