
import { createTheme } from "@mui/material/styles";

const getTheme = (darkMode) => createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: '#1C3FEC',
      light: '#4169E1',
      dark: '#0B1F78',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD700',
      light: '#FFEB99',
      dark: '#CC9900',
      contrastText: '#000000',
    },
    background: {
      default: darkMode ? '#121212' : '#F5F7FA',
      paper: darkMode ? '#1e1e1e' : '#FFFFFF',
      sidebar: '#1C3FEC',
    },
    text: {
      primary: darkMode ? '#FFFFFF' : '#333333',
      secondary: darkMode ? '#CCCCCC' : '#666666',
      disabled: darkMode ? '#777777' : '#999999',
      hint: darkMode ? '#999999' : '#BBBBBB',
    },
    status: {
      success: '#4CAF50',
      info: '#2196F3',
      warning: '#FF9800',
      error: '#F44336',
    },
    divider: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C3FEC',
          color: '#FFFFFF',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: darkMode ? '#1e1e1e' : '#1C3FEC',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#1C3FEC',
          '&:hover': {
            backgroundColor: '#0B1F78',
          },
        },
        containedSecondary: {
          backgroundColor: '#FFD700',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#CC9900',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: darkMode 
            ? '0 2px 8px 0 rgba(0, 0, 0, 0.5)' 
            : '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: darkMode 
              ? '0 4px 12px 0 rgba(0, 0, 0, 0.7)' 
              : '0 4px 12px 0 rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: darkMode ? '#308fe8' : '#1C3FEC',
        },
        colorSecondary: {
          backgroundColor: darkMode ? '#e33371' : '#FFD700',
          color: '#000000',
        },
        colorSuccess: {
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
        },
        colorWarning: {
          backgroundColor: '#FF9800',
          color: '#000000',
        },
        colorError: {
          backgroundColor: '#F44336',
          color: '#FFFFFF',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px 16px',
        },
      },
    },
  },
});

export default getTheme;
