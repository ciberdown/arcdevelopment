import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { ElevationScroll, ElevationProps } from "../UI/functions";
import { myStyles } from "../UI/styles";
import Tabs from "./tabs";

import { NavigateFunction, useNavigate } from "react-router";
export default function NavBar(props: ElevationProps) {
  const navigate: NavigateFunction = useNavigate();
  const classes = myStyles();
  return (
    <ElevationScroll {...props}>
      <AppBar position="fixed">
        <Toolbar disableGutters={true} className={classes.toolbarMargin}>
          <Tabs />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
