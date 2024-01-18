import styled from '@emotion/styled'
import { Box } from '@mui/material'

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
`
export const AvatarInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9375rem;
    margin-bottom: 26px;
`
