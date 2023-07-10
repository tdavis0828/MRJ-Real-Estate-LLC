import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import { StyledNav } from "../styles/Stylesheet";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledNav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Resources
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>We Buy Houses Cash</MenuItem>
          <MenuItem onClick={handleClose}>Mortgage Calculator</MenuItem>
          <MenuItem onClick={handleClose}>What is my house worth?</MenuItem>
        </Menu>

        <Link to="contact">Contact</Link>
        <Link to="#faqs">FAQs</Link>
        <Link to="blog">Blog</Link>
      </div>
      {/* <div className="nav-info">
        <p>9312 LaCroix court, Bakersfield, CA 93311</p>
        <p>DRE#: 02081683</p>
      </div> */}
    </StyledNav>
  );
};

export default Navbar;
