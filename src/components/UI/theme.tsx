import { createTheme } from "@mui/material/styles";
import { blue, orange, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      danger: string;
      myColor: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      danger?: string;
      myColor?: string;
    };
  }
}

const theme = createTheme({
  custom: {
    danger: orange[300],
    myColor: red[300],
  },
  direction: "rtl",
  palette: {
    primary: {
      main: blue[700],
      dark: blue[900],
    },
    secondary: {
      main: orange[400],
    },
    info: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
