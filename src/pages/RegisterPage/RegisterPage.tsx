import AuthForm from 'src/components/AuthForm/AuthForm'

import Container from 'src/components/Container/Container'
import { RegisterPageStyled, FormWrapper } from './RegisterPage.styled'

function RegisterPage() {
    return (
        <RegisterPageStyled>
            <Container>
                <FormWrapper>
                    <AuthForm />
                </FormWrapper>
            </Container>
        </RegisterPageStyled>
    )
}

export default RegisterPage
