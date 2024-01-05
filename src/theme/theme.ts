import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Theme {
        colors: {
            buttonTextColor: string
            formLinkTextColor: string
            buttonHoverTextColor: string
            authButtonBackgroundColor: string
            authButtonTextColor: string
            buttonHoverBackgroundColor: string
            formBackgroundColor: string
            inputBorderColor: string
        }
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        colors?: {
            buttonTextColor?: string
            formLinkTextColor?: string
            buttonHoverTextColor?: string
            authButtonTextColor?: string
            authButtonBackgroundColor?: string
            buttonHoverBackgroundColor?: string
            formBackgroundColor?: string
            inputBorderColor?: string
        }
    }
}

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#FEF9F9',
            paper: '#FDF7F2',
        },
        text: {
            primary: '#111111',
            secondary: '#888888',
            //  ${({ theme }) => (theme as any).palette?.text.secondary};
        },
        error: {
            main: '#F43F5E',
        },
    },
    colors: {
        buttonTextColor: '#54ADFF',
        formLinkTextColor: '#54ADFF',
        //  ${({ theme }) => (theme as any).colors?.formLinkTextColor};
        buttonHoverTextColor: '#FFFFFF',
        authButtonTextColor: '#FFFFFF',
        authButtonBackgroundColor: '#54ADFF',
        // ${({ theme }) =>(theme as any).colors?.authButtonBackgroundColor};
        buttonHoverBackgroundColor:
            'linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%)',
        formBackgroundColor: '#FFFFFF',
        inputBorderColor: '#54ADFF',
    },
})

export default theme

// lightCream: '#FDF7F2',
// black: '#111111',
// gradientBlue: 'linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%)',
// skyBlue: '#54ADF',
// blueLight: '#CCE4F',
// green: '#00C3AD',
// crimsonPink: '#F43F5E',
