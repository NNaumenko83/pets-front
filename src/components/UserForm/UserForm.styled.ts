import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const UserFormStyled = styled.form`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
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
