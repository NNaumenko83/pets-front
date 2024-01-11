import Container from 'src/components/Container/Container'

import LoginForm from 'src/components/LoginForm/LoginForm'
import { LoginPageStyled, FormWrapper } from './LoginPage.styled'

function LoginPage() {
    return (
        <LoginPageStyled>
            <Container>
                <FormWrapper>
                    <LoginForm />
                </FormWrapper>
            </Container>
        </LoginPageStyled>
    )
}

export default LoginPage
