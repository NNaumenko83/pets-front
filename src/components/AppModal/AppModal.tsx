/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */

import Modal from '@mui/material/Modal'
import { ReactNode } from 'react'
import BoxStyled from './AppModal.styled'

interface AppModalProps {
    onClose: () => void
    children: ReactNode
    isOpen: boolean
}

function AppModal({ onClose, children, isOpen, ...props }: AppModalProps) {
    return (
        <Modal keepMounted open={isOpen} onClose={onClose} {...props}>
            <BoxStyled>{children}</BoxStyled>
        </Modal>
    )
}

export default AppModal
