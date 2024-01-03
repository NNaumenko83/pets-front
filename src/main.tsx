import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'
import theme from './theme/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
