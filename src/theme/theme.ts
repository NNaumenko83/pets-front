import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Theme {
        colors: {
            buttonTextColor: string
            iconsColor: string
            formLinkTextColor: string
            buttonHoverTextColor: string
            authButtonBackgroundColor: string
            authButtonTextColor: string
            authLinkTextColor: string

            buttonHoverBackgroundColor: string
            formBackgroundColor: string
            inputBorderColor: string
            linkCurrentColor: string
            authLinkCurrentColor: string
            authLinkCurrentBgColor: string
            authLinkBgColor: string
            linkHovertColor: string
        }
    }
    interface BreakpointOverrides {
        xs: false // removes the `xs` breakpoint
        sm: false
        md: false
        lg: false
        xl: false
        mobile: string // adds the `mobile` breakpoint
        tablet: string
        desktop: string
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        colors?: {
            buttonTextColor?: string
            iconsColor?: string
            formLinkTextColor?: string
            buttonHoverTextColor?: string
            authButtonTextColor?: string
            authLinkTextColor?: string

            authButtonBackgroundColor?: string
            buttonHoverBackgroundColor?: string
            formBackgroundColor?: string
            inputBorderColor?: string
            linkCurrentColor?: string
            authLinkCurrentColor?: string
            authLinkCurrentBgColor?: string
            authLinkBgColor?: string
            linkHovertColor?: string
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
            // ${({ theme }) => (theme as any).palette?.text.primary};
            secondary: '#888888',
            //  ${({ theme }) => (theme as any).palette?.text.secondary};
        },
        error: {
            main: '#F43F5E',
        },
    },
    breakpoints: {
        values: {
            mobile: '320px',
            tablet: '768px',
            desktop: '1280px',
        },
    },
    colors: {
        buttonTextColor: '#54ADFF',
        iconsColor: '#54ADFF',
        // ${({ theme }) => (theme as any).colors?.iconsColor};
        formLinkTextColor: '#54ADFF',
        //  ${({ theme }) => (theme as any).colors?.formLinkTextColor};
        buttonHoverTextColor: '#FFFFFF',
        authButtonTextColor: '#FFFFFF',
        authLinkTextColor: '#FFC107',

        authButtonBackgroundColor: '#54ADFF',
        // ${({ theme }) =>(theme as any).colors?.authButtonBackgroundColor};
        buttonHoverBackgroundColor:
            'linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%)',
        formBackgroundColor: '#FFFFFF',
        inputBorderColor: '#54ADFF',
        linkCurrentColor: '#FFC107',
        // ${({ theme}) =>(theme as any).colors?.linkCurrentColor
        authLinkCurrentColor: '#FFFFFF',
        authLinkCurrentBgColor: '#FFC107',
        authLinkBgColor: '#FFFFFF',
        linkHovertColor: '#FFC107',
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
