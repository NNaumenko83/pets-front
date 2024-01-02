import { Suspense } from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'

function SharedLayout() {
    return (
        <>
            <Header />
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
}

export default SharedLayout
