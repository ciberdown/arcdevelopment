import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
export default function ServicesMenu({
  anchorEl,
  setAnchorEl,
}: {
  anchorEl: HTMLElement | null;
  setAnchorEl: Function;
}) {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleService = () => {
    setAnchorEl(null);
    navigate("/services");
  };
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleService}>Services</MenuItem>
        <MenuItem onClick={handleClose}>Custom Software Development</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Development</MenuItem>
        <MenuItem onClick={handleClose}>Website Development</MenuItem>
      </Menu>
    </div>
  );
}
