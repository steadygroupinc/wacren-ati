'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004A99', // Deep Sea Blue
    },
    secondary: {
      main: '#E67E22', // Warning Orange
    },
    background: {
      default: '#F9F6F3', // Soft Cloud White
      paper: '#ffffff',
    },
    text: {
      primary: '#323232', // Charcoal Grey
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'var(--font-outfit), sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false, // Keep ripple but remove focus ring
      },
      styleOverrides: {
        root: {
          outline: 'none !important',
          boxShadow: 'none !important',
          '&:focus': {
            outline: 'none !important',
          },
          '&:active': {
            outline: 'none !important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none !important',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none !important',
          },
        },
      },
    },
  },
});

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}