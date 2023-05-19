import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import { styles } from "../UI/styles";
import { useEffect, useState } from "react";
import { orange, blue } from "@mui/material/colors";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import logo from "../../assets/logo.svg";
import { myStyles } from "../UI/styles";

export default function ColorTabs() {
  const [value, setValue] = useState("one");
  const classes = myStyles();
  const primary = orange[400];
  const white = "#FFFFFF";
  const [selectedColor, setColor] = useState<string>(primary);
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
        setColor(white);
      }
    });
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setColor(primary);
    setValue(newValue);
    entries.forEach((item) => {
      if (newValue === item[0]) {
        navigate(item[1]);
        return 1;
      }
    });
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
        <MyCustomTabs selectedColor={selectedColor}>
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
            <Tab sx={styles.tab} value="two" label="Services" />
            <Tab sx={styles.tab} value="three" label="The revelotion" />
            <Tab sx={styles.tab} value="four" label="About us" />
            <Tab sx={styles.tab} value="five" label="Contact us" />
          </Tabs>
        </MyCustomTabs>
      </Box>
      <Button
        variant="contained"
        sx={styles.button}
        color="secondary"
        onClick={(e) => {
          navigate("/freeEstimate");
          setColor(white);
        }}
      >
        Free Estimated
      </Button>
    </>
  );
}

function MyCustomTabs({
  children,
  selectedColor,
}: {
  children: JSX.Element;
  selectedColor: string;
}) {
  const tabsTheme = createTheme({
    palette: {
      primary: {
        main: blue[700],
      },
      secondary: {
        main: selectedColor,
      },
    },
  });
  return <ThemeProvider theme={tabsTheme}>{children}</ThemeProvider>;
}
