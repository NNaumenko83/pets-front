import AppModal from 'src/components/AppModal/AppModal'
import AuthForm from 'src/components/AuthForm/AuthForm'
import useModal from 'src/hooks/useModal'

function RegisterPage() {
    const { isOpen, openModal, onClose } = useModal()
    return (
        <div>
            <AuthForm />
            <AppModal isOpen={isOpen} onClose={onClose}>
                Hello
            </AppModal>
            <button type="button" onClick={openModal}>
                Open modal
            </button>
        </div>
    )
}

export default RegisterPage
