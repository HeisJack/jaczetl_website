import { createTheme } from '@mui/material/styles';
import '../styles/fonts.css';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#342A6D', // Define your primary color
            second: '#F4F3F9',
            third: '#7C79A3',
            fourth: '#E2E8EC',
            fifth: '#9BB7B6'
        }
    },

    typography: {
        fontFamily: 'Frutiger, Arial, sans-serif', // Default font
        logoLink: {
            textDecoration: 'none',
            padding: '1%',
            fontSize: '3vw',
        },
        logoLinkSubtext:{
            color: (theme) => theme.palette.primary.main,
            fontSize: '.75vw',
        },
    },
    appBar: {
        backgroundColor: 'white',
        width: '100%',
        padding: '1%'
    },
    appBarLinks: {
        color: (theme) => theme.palette.primary.main,
        display: 'flex',
        fontWeight: 'bold',
    }
    // Add other customizations as needed
});

export default Theme; 
