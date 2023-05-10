import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StyledNav } from '../styles/Stylesheet';

const Navbar = () => {
  const navigate = useNavigate();
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
        <Link to="listings">Listings</Link>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Resources
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              navigate('we-buy-houses');
            }}
          >
            We Buy Houses Cash
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate('mortgage-calculator');
            }}
          >
            Mortgage Calculator
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate('worth-calculator');
            }}
          >
            What is my house worth?
          </MenuItem>
        </Menu>

        <Link to="contact">Contact</Link>
        <Link to="#faqs">FAQs</Link>
        <Link to="blog">Blog</Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
