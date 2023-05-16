import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
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
          background: "#7367F0",
          transition: "background-color 0.3s ease",
          "&:hover": {
            background: "#6367F0",
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#7367F0",
          },
          "&:hover": {
            background: "none",
          },

          padding: "0 8px 0 0",
          color: "rgb(203 213 225)",
        },
        checked: {
          color: "#7367F0",
        },
      },
    },
    MuiTextField: {},
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: "50px",
          width: "50px",
          background: "rgb(233 213 255)",
          transition: "background-color 0.3s ease",
          "&:hover": {
            background: "rgb(216 180 254)",
          },
        },
      },
    },
  },
});

export default theme;
