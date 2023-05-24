import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { ElevationScroll, ElevationProps } from "../UI/functions";
import ColorTabs from "./tabs";
import * as React from "react";
import { useNavigate } from "react-router";
import { styles } from "../UI/styles";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import logo from "../../assets/logo.svg";
import { useStyles } from "../UI/styles";
import ServicesMenu from "../body/services menu/servicesMenu";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function NavBar(props: ElevationProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>();
  const theme = useTheme();
  const lowerThanMedium: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState("one");
  const classes = useStyles();
  const myPathes = {
    one: "/",
    two: "/services",
    three: "/revelotion",
    four: "/about",
    five: "/contact",
  };
  const servicesPathes = [
    "/customSoftwareDevelopment",
    "/mobileAppDevelopment",
    "/websiteDevelopment",
  ];
  const entries = Object.entries(myPathes); //[['one', '/'], ['two', '/services'] ,...]
  const navigate = useNavigate();
  useEffect(() => {
    //when page reloads
    const path: string = window.location.pathname; // '/'
    if (servicesPathes.indexOf(path) >= 0) {
      setValue("two");
    }
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
            draggable={false}
          />
          <Box sx={{ width: "100%", fontWeight: "bolder" }}>
            {!lowerThanMedium && (
              <ColorTabs
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
                valueSetter={value}
                entries={entries}
                setAnchorEl={setAnchorEl}
              />
            )}
          </Box>
          {!lowerThanMedium && (
            <>
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
              <ServicesMenu
                setValue={setValue}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
