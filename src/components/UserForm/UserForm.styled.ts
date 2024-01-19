import styled from '@emotion/styled'
// eslint-disable-next-line import/no-extraneous-dependencies
import { RiEdit2Line } from 'react-icons/ri'
import { Box } from '@mui/material'
import InputGroupStyled from '../InputGrooup/InputGrooup.styled'

export const UserFormInputGroupStyled = styled(InputGroupStyled)`
    height: 2rem;
    width: 15.9375rem;
    padding: 0.75rem 1rem;
`

export const AvatarLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const StyledUserInfoLabel = styled.label`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

export const StyledEditIcon = styled(RiEdit2Line)`
    width: 18px;
    height: 18px;
    fill: #54adff;
`

export const LabelText = styled.label`
    color: #111111;
    font-family: 'Manrope SemiBold';
    font-size: 18px;

    line-height: 1.39;
    letter-spacing: 0.72px;
`

export const UserFormStyled = styled.form`
    width: 24.6875rem;
    height: 32.5rem;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`
export const StyledBox = styled(Box)`
    display: flex;
    width: 100%;
    padding: 24px;
    justify-content: center;
`

export const AvatarWrapper = styled.div`
    width: 182px;
    height: 182px;
    border-radius: 40px;
    overflow: hidden;
`

export const InputsUserFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
`
export const AvatarInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9375rem;
    margin-bottom: 26px;
`
