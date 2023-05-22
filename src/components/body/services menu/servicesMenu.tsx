import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";

const options = [
  "Services",
  "custome software development",
  "mobile app development",
  "website development",
];

export default function SServicesMenu({
  anchorEl,
  setAnchorEl,
}: {
  anchorEl: HTMLElement | null;
  setAnchorEl: Function;
}) {
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
  }, []);
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
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
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
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
