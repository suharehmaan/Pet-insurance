
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      // Check for preferred color scheme if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#dc004e',
      },
      background: {
        default: darkMode ? '#121212' : '#f4f6f8',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#b0b0b0' : '#6c6c6c',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#272727' : '#1976d2',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: darkMode ? '0 2px 8px 0 rgba(0, 0, 0, 0.5)' : '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: darkMode ? '#308fe8' : '#1976d2',
          },
          colorSecondary: {
            backgroundColor: darkMode ? '#e33371' : '#dc004e',
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
