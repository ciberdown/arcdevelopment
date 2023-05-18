
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";



export const useStyles = makeStyles((theme: Theme) => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
    logo: {
      height: "4em",
    },
    tab:{
      color: 'white' ,
      fontFamily:"serif"
    }
  }));
  