import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import logo from "../../assets/logo.svg";
import { ElevationScroll, ElevationProps } from "../UI/functions";
import { useStyles } from "../UI/functions";

export default function NavBar(props: ElevationProps) {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar disableGutters={true} className={classes.toolbarMargin}>
            <img className={classes.logo} src={logo} alt="arc logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
