import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import "@fontsource/raleway";
import "@fontsource/pacifico";
import theme from "./theme";


const toolbarHeight: string = '70px';
const matchToolbarHeight: string = '50px';
export const styles = {
  tab: {
    textTransform: "none",
    fontSize: "1.02em",
    padding: "12px",
    fontFamily: "Raleway",
    color: "white",
    fontWeight: "bolder",
  },
  button: {
    color: "white",
    fontFamily: "Pacifico",
    textTransform: "none",
    marginLeft: "20px",
    marginRight: "20px",
    minWidth: "130px",
    borderRadius: "20px",
  },
};

export const useStyles = makeStyles((thisTheme: Theme) => ({
  toolbarMargin: {
    ...thisTheme.mixins.toolbar,
    height: toolbarHeight,
    [theme.breakpoints.down("md")]: {
      height: '20px',
    },
  },
  logo: {
    height: toolbarHeight,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      height: '64px',
    },
  },
  myTab: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontSize: "1rem",
    padding: "20px",
  },
  menu: {
    backgroundColor: thisTheme.palette.primary.main,
    color: thisTheme.palette.info.main,
  },
  menuItems: {
    opacity: 0.7,
    "&:hover": {
      color: thisTheme.palette.secondary.main,
      backgroundColor: thisTheme.palette.info.main,
      opacity: 1,
    },
  },
  selected: {
    color: thisTheme.palette.secondary.main,
    opacity: 1,
  },
}));
