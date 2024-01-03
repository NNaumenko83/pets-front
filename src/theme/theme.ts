import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Theme {
        colors: {
            main: string
        }
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        colors?: {
            main?: string
        }
    }
}

const theme = createTheme({
    palette: {
        // UI Kit
        primary: {
            main: '#FFC107',
            // lightCream: '#FDF7F2',
            // black: '#111111',
            // gradientBlue: 'linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%)',
            // skyBlue: '#54ADF',
            // blueLight: '#CCE4F',
            // green: '#00C3AD',
            // crimsonPink: '#F43F5E',
        },

        //
        // backgroung: '#FEF9F9',
    },

    colors: { main: "#FFC107'" },
})

export default theme
