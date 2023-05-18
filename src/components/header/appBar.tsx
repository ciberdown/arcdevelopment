import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import logo from "../../assets/logo.svg";
import { ElevationScroll, ElevationProps } from "../UI/functions";
import { myStyles } from "../UI/styles";
import Tabs from "./tabs";
import MyRouter from "../body/myRouter";
import { Button } from "@mui/material";
import { styles } from "../UI/styles";
export default function NavBar(props: ElevationProps) {
  const classes = myStyles();
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar disableGutters={true} className={classes.toolbarMargin}>
            <img className={classes.logo} src={logo} alt="arc logo" />
            <Tabs />
            <Button
              variant="contained"
              sx={styles.button}
              color="secondary"
            >
              Free Estimated
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <MyRouter />
    </>
  );
}
