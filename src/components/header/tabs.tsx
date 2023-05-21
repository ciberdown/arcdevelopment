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

export default function ColorTabs() {
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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    entries.forEach((item) => {
      if (newValue === item[0]) {
        navigate(item[1]);
        return 1;
      }
    });
  };
  const handleClickServices = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <img
        onClick={() => {
          navigate("/");
          setValue("one");
        }}
        className={classes.logo}
        src={logo}
        alt="arc logo"
      />
      <Box sx={{ width: "100%", color: "red" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab
            sx={{ marginRight: "auto", ...styles.tab }}
            value="one"
            label="Home"
          />
          <Tab
            onClick={(event) => handleClickServices(event)}
            sx={styles.tab}
            value="two"
            label="Services"
          />
          <Tab sx={styles.tab} value="three" label="The revelotion" />
          <Tab sx={styles.tab} value="four" label="About us" />
          <Tab sx={styles.tab} value="five" label="Contact us" />
        </Tabs>
      </Box>
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
    </>
  );
}
