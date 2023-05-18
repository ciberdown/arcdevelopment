import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import {styles} from '../UI/styles'
export default function ColorTabs() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const routeHandle = (str: string) => {
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
    <Box sx={{ width: "100%"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          sx={{ marginRight: "auto", ...styles.tab  }}
          onClick={() => routeHandle("one")}
          value="one"
          label="Home"
        />
        <Tab
        sx={styles.tab}
          onClick={() => routeHandle("two")}
          value="two"
          label="Services"
        />
        <Tab
        sx={styles.tab}
          onClick={() => routeHandle("three")}
          value="three"
          label="The revelotion"
        />
        <Tab
        sx={styles.tab}
          onClick={() => routeHandle("four")}
          value="four"
          label="About us"
        />
        <Tab
        sx={styles.tab}
          onClick={() => routeHandle("five")}
          value="five"
          label="Contact us"
        />
      </Tabs>
    </Box>
  );
}
