import AddPetForm from 'src/components/AddPetForm/AddPetForm'
import Container from 'src/components/Container/Container'
import { AddPetPageStyled, FormWrapper } from './AddPetPage.styled'

function AddPetPage() {
    return (
        <AddPetPageStyled>
            <Container>
                <FormWrapper>
                    <AddPetForm />
                </FormWrapper>
            </Container>
        </AddPetPageStyled>
    )
}

export default AddPetPage
