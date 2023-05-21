import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import { styles } from "../UI/styles";
interface Props {
  setValue: Function;
  valueSetter: string;
  entries: [string, string][];
  anchorEl: HTMLElement | null;
  setAnchorEl: Function;
}
export default function ColorTabs({
  setValue,
  valueSetter: value,
  entries,
  anchorEl,
  setAnchorEl,
}: Props) {
  const navigate = useNavigate();
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
    </>
  );
}
