import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router";
import { styles } from "../UI/styles";
interface Props {
  setValue: Function;
  valueSetter: string;
  entries: [string, string][];
  setAnchorEl: Function;
  setSelectedIndex: Function;
}
export default function ColorTabs({
  setValue,
  valueSetter: value,
  entries,
  setAnchorEl,
  setSelectedIndex,
}: Props) {
  const navigate = useNavigate();
  const handleClickServices = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    newValue !== "two" && setValue(newValue);
    entries.forEach((item) => {
      if (newValue === item[0]) {
        newValue !== "two" && navigate(item[1]);
        newValue === "two" && setSelectedIndex(0);
        return 1;
      }
    });
  };

  return (
    <>
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
          id="demo-positioned-button"
          onMouseEnter={(e) => handleClickServices(e)}
          sx={styles.tab}
          value="two"
          label="Services"
        />
        <Tab sx={styles.tab} value="three" label="The revelotion" />
        <Tab sx={styles.tab} value="four" label="About us" />
        <Tab sx={styles.tab} value="five" label="Contact us" />
      </Tabs>
    </>
  );
}
