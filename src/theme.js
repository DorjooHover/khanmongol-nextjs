import {extendTheme} from '@chakra-ui/react'
const fonts = { mono: `, monospace`}

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px'
}

const theme = extendTheme({
    breakpoints,
    fonts,
    styles: {
        global: {
            body: {
                // bg
            }
        }
    },
    colors: {
        text: {
            title: '#002b46',
            icon: '#ffb606',
            card: {
                title: "#646873",
                text: '#717171',
            },
            text: '#737581',
            hover: '#eb7f1c'
        },
        bg: {
            gray: '#f7f7f7',
            purple: '#442e66',
            linearOrange: 'linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)',
            linearYellow: 'linear-gradient( -145deg, rgb(253,200,48) 50%, rgb(243,115,53) 75%)',
            black: '#222'
        }
        
    }
})

export default theme