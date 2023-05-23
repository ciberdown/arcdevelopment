import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const options = [
  "Services",
  "Custom software development",
  "Mobile app development",
  "Website development",
];
const useStyle = makeStyles((thisTheme: Theme) => ({
  selected: {
    color: thisTheme.palette.secondary.main,
    backgroundColor: "white",
  },
  menu: {
    backgroundColor: thisTheme.palette.primary.main,
    color: thisTheme.palette.info.main,
  },
  menuItems: {
    "&:hover": {
      color: thisTheme.palette.secondary.main,
      backgroundColor: thisTheme.palette.info.main,
      opacity: 1,
    },
  },
}));
export default function SServicesMenu({
  anchorEl,
  setAnchorEl,
  selectedIndex,
  setSelectedIndex,
  setValue,
}: {
  anchorEl: HTMLElement | null;
  setAnchorEl: Function;
  selectedIndex: number | undefined;
  setSelectedIndex: Function;
  setValue: Function;
}) {
  const classes = useStyle();
  React.useEffect(() => {
    const path: string = window.location.pathname; // '/'
    switch (path) {
      case "/services":
        setSelectedIndex(0);
        break;
      case "/customSoftwareDevelopment":
        setSelectedIndex(1);
        break;
      case "/mobileAppDevelopment":
        setSelectedIndex(2);
        break;
      case "/websiteDevelopment":
        setSelectedIndex(3);
        break;
    }
  }, [selectedIndex]);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setValue("two");
    setSelectedIndex(index);
    switch (index) {
      case 0:
        navigate("/services");
        break;
      case 1:
        navigate("/customSoftwareDevelopment");
        break;
      case 2:
        navigate("/mobileAppDevelopment");
        break;
      case 3:
        navigate("/websiteDevelopment");
        break;
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Menu
        classes={{ list: classes.menu }}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
        transitionDuration={50}
      >
        {options.map((option, index) => (
          <MenuItem
            classes={{ selected: classes.selected, root: classes.menuItems }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}