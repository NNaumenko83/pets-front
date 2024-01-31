import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import AppModal from 'src/components/AppModal/AppModal'

import UserData from 'src/components/UserData/UserData'
import useAuth from 'src/hooks/useAuth'
import useModal from 'src/hooks/useModal'
import UserPageContainer from './UserPage.styled'

function UserPage() {
    const location = useLocation()

    const { isShowModalCongrats } = useAuth()

    const fromPage: string = location.state?.from?.pathname || '/'

    const { isOpen, onClose, openModal } = useModal()

    useEffect(() => {
        if (fromPage === '/register' && isShowModalCongrats) {
            openModal()
        }
    }, [])

    return (
        <>
            <UserPageContainer>
                <div>
                    My information:
                    <UserData />
                </div>
                <div>
                    My pets:
                    <Link to="/add-pet">Add pet</Link>
                </div>
            </UserPageContainer>

            <AppModal isOpen={isOpen} onClose={onClose}>
                HELLO!!!
            </AppModal>
        </>
    )
}

export default UserPage
