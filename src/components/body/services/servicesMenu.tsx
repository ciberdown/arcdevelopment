import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ServicesMenu({
    anchorEl,
    setAnchorEl,
  }: {
    anchorEl: HTMLElement | null;
    setAnchorEl: Function;
  }) {
    const open = Boolean(anchorEl);
    const handleClose = () => {
      setAnchorEl(null);
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
          <MenuItem onClick={handleClose}>Custom Software Development</MenuItem>
          <MenuItem onClick={handleClose}>Mobile App Development</MenuItem>
          <MenuItem onClick={handleClose}>Website Development</MenuItem>
        </Menu>
      </div>
    );
  }
  