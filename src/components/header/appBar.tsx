import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { ElevationScroll, ElevationProps } from "../UI/functions";
import ColorTabs from "./tabs";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import { styles } from "../UI/styles";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import logo from "../../assets/logo.svg";
import { myStyles } from "../UI/styles";
import ServicesMenu from "../body/services/servicesMenu";

export default function NavBar(props: ElevationProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = useState("one");
  const classes = myStyles();
  const myPathes = {
    one: "/",
    two: "/services",
    three: "/revelotion",
    four: "/about",
    five: "/contact",
  };
  const entries = Object.entries(myPathes); //[['one', '/'], ['two', '/services'] ,...]
  const navigate = useNavigate();
  useEffect(() => {
    //when page reloads
    const path: string = window.location.pathname; // '/'
    entries.forEach((item) => {
      if (path === item[1]) {
        setValue(item[0]);
        return; //break
      } else if (path === "/freeEstimate") {
        setValue("free");
      }
    });
  }, [value]);

  return (
    <ElevationScroll {...props}>
      <AppBar position="fixed">
        <Toolbar disableGutters={true} className={classes.toolbarMargin}>
          <img
            onClick={() => {
              navigate("/");
              setValue("one");
            }}
            className={classes.logo}
            src={logo}
            alt="arc logo"
          />
          <ColorTabs
            setValue={setValue}
            valueSetter={value}
            entries={entries}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          />
          <Button
            variant="contained"
            sx={styles.button}
            color="secondary"
            onClick={() => {
              navigate("/freeEstimate");
              setValue("free");
            }}
          >
            Free Estimated
          </Button>
          <ServicesMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
