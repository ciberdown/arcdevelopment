import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import "@fontsource/raleway";
import "@fontsource/pacifico";

export const styles = {
    tab: {
      textTransform: "none",
      fontSize: "1rem",
      padding: "20px",
      fontFamily:'Raleway',
      color:'white'
    },
    button:{
      color: 'white',
      fontFamily:'Pacifico',
      textTransform:'none',
      marginLeft:'20px',
      marginRight: '20px',
      minWidth:'130px',
      borderRadius:'20px'
    }
  };

export const myStyles = makeStyles((theme: Theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "4em",
  },
  myTab: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontSize:'1rem',
    padding:'20px',
  }
}));
