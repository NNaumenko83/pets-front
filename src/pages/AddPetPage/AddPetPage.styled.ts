import styled from '@emotion/styled'

import bg from '../../assets/bg-desktop.png'

export const AddPetPageStyled = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: 50% 50%;

    height: calc(100vh - 68px);

    width: 100%;
`

export const FormWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 2.5rem;

    display: flex;
    justify-content: center;
`
