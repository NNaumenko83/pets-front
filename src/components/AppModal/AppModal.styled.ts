/* eslint-disable import/no-extraneous-dependencies */
import Box from '@mui/material/Box'

import styled from '@emotion/styled'

export const BoxStyled = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 200px;
    max-width: 700px;
    background-color: yellow;
    border: 1px solid red;
    border-radius: 16px;
    padding: 40px;
`
export default BoxStyled
