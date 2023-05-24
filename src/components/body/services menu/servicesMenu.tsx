import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import { useStyles } from "../../UI/styles";
const options = [
  "Services",
  "Custom software development",
  "Mobile app development",
  "Website development",
];
interface Props {
  anchorEl: HTMLElement | null;
  setAnchorEl: Function;
  selectedIndex: number | undefined;
  setSelectedIndex: Function;
  setValue: Function;
}

export default function SServicesMenu({
  anchorEl,
  setAnchorEl,
  selectedIndex,
  setSelectedIndex,
  setValue,
}: Props) {
  const classes = useStyles();
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
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
        transitionDuration={50}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div onMouseLeave={handleClose}>
          {options.map((option, index) => (
            <MenuItem
              classes={{ root: classes.menuItems, selected: classes.selected }}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
}
