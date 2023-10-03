import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledNav } from '../styles/Stylesheet';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../store/adminSlice';

const StyledMenu = styled(Menu)`
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #181818;
    & a {
      color: #fff;
      text-decoration: none;
      width: 100%;
      height: 100%;
      padding: 1rem;
      transition: hover 0.35s ease;

      &:hover {
        text-decoration: underline;
        background: #3c4048;
        transition: all 0.35s ease;
      }
    }
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.navbar, shallowEqual);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(isLoggedIn);
  });

  return (
    <StyledNav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="current-listings">Listings</Link>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Resources
        </Button>
        <StyledMenu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <Link to="we-buy-houses" onClick={handleClose}>
            We Buy Houses Cash
          </Link>
          <Link to="calculator" onClick={handleClose}>
            Mortgage Calculator
          </Link>
          <Link to="home-worth" onClick={handleClose}>
            What is my house worth?
          </Link>
        </StyledMenu>

        <Link to="contact">Contact</Link>
        <Link to="faq">FAQs</Link>
        <Link to="blog">Blog</Link>
        <Link
          to="/"
          onClick={
            isLoggedIn
              ? () => dispatch(setIsLoggedIn(false))
              : () => dispatch(setIsLoggedIn(true))
          }
        >
          Login
        </Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
