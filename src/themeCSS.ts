import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
    secondary: {
      main: "rgb(139 92 246)",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          color: "white",
          background: "rgb(139 92 246)",
          transition: "background-color 0.3s ease",
          "&:hover": {
            background: "rgb(167 139 250)",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0 8px 0 0",
          color: "rgb(203 213 225)",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: "48px",
          width: "48px",
          background: "rgb(187 247 208)",
          transition: "background-color 0.3s ease",
          "&:hover": {
            background: "rgb(254 202 202)",
          },
        },
      },
    },
  },
});

export default theme;
