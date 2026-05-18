"use client";
import { deepPurple, pink, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary?: PaletteOptions["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[200],
      light: deepPurple[100],
      dark: deepPurple[300],
    },
    secondary: {
      main: pink[200],
      light: pink[100],
      dark: pink[300],
    },
    tertiary: {
      main: teal[200],
      light: teal[100],
      dark: teal[300],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FFF7D4", // Butter yellow background
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: "#000000",
      },
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid rgba(0,0,0,0.9)",
          margin: "16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "2px solid rgba(0,0,0,0.9)",
          margin: "16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "2px solid rgba(0,0,0,0.9)",
        },
      },
    },
  },
});

export default theme;
