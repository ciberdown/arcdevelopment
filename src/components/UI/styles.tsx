import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const styles = {
    tab: {
      textTransform: "none",
      fontSize: "1rem",
      padding: "20px",
    },
  };

export const myStyles = makeStyles((theme: Theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "4em",
  },
  myTab: {
    fontFamily: "serif",
    textTransform: "none",
    fontSize:'1rem',
    padding:'20px'
  },
}));
