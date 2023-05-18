import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useStyles } from "../UI/styles";
import { useNavigate } from "react-router";


export default function ColorTabs() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("one");
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const homeHandle = (str: string) => {
    switch (str) {
      case "two":
        navigate("/services");
        break;
      case "three":
        navigate("/revelotion");
        break;
      case "four":
        navigate("/about");
        break;
      case "five":
        navigate("/contact");
        break;
      default:
        navigate("/");
        break;
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className={classes.tab}
      >
        <Tab onClick={() => homeHandle("one")} value="one" label="Home" />
        <Tab onClick={() => homeHandle("two")} value="two" label="Services" />
        <Tab
          onClick={() => homeHandle("three")}
          value="three"
          label="The revelotion"
        />
        <Tab onClick={() => homeHandle("four")} value="four" label="About us" />
        <Tab
          onClick={() => homeHandle("five")}
          value="five"
          label="Contact us"
        />
      </Tabs>
    </Box>
  );
}


