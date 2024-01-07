import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppModal from 'src/components/AppModal/AppModal'
import useModal from 'src/hooks/useModal'

function UserPage() {
    const location = useLocation()

    const fromPage: string = location.state?.from?.pathname || '/'

    const { isOpen, onClose, openModal } = useModal()

    useEffect(() => {
        if (fromPage === '/register') {
            openModal()
        }
    }, [])

    return (
        <>
            <div>UserPage</div>
            <AppModal isOpen={isOpen} onClose={onClose}>
                HELLO!!!
            </AppModal>
        </>
    )
}

export default UserPage
