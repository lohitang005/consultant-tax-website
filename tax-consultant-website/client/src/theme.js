import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Royal Blue
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#757575', // Soft Grey
      light: '#a4a4a4',
      dark: '#494949',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#1a237e', // Royal Blue for headings
      secondary: '#424242', // Dark Grey for body text
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    grey: {
      50: '#f8f9fa',
      100: '#f1f3f4',
      200: '#e8eaed',
      300: '#dadce0',
      400: '#bdc1c6',
      500: '#9aa0a6',
      600: '#757575',
      700: '#5f6368',
      800: '#3c4043',
      900: '#202124',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      color: '#1a237e',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: '#1a237e',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      color: '#1a237e',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.2,
      color: '#1a237e',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
      color: '#1a237e',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.2,
      color: '#1a237e',
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.5,
      color: '#424242',
    },
    subtitle2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#424242',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#424242',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#424242',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme; 