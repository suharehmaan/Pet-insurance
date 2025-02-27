import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff9800",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2",
          color: "#ffffff",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          width: 240,
        },
      },
    },
  },
});

export default theme;
