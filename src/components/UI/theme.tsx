import { createTheme} from '@mui/material/styles';
import { blue, green, orange } from '@mui/material/colors';


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  direction: 'rtl',
  palette:{
    primary:{
        main:blue[700]
    },
    secondary: {
        main: '#f1e5f5'
      },
  }
});

export default theme;
