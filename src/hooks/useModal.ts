import { useState } from 'react'

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    return { isOpen, openModal, onClose }
}

export default useModal
