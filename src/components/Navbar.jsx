import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledNav, OpenBtn } from '../styles/Stylesheet';
import openBtn from '../images/hamburger-dark.png';

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
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNavIsOpen(false);
  };

  return (
    <>
      {!navIsOpen && (
        <OpenBtn>
          <button
            onClick={() => {
              setNavIsOpen(true);
            }}
          >
            <img src={openBtn} alt="hamburger menu button" />
          </button>
        </OpenBtn>
      )}

      <StyledNav className={navIsOpen ? 'open' : 'closed'}>
        <div className="nav-links">
          <Link to="/" onClick={() => setNavIsOpen(false)}>
            Home
          </Link>
          <Link to="current-listings" onClick={() => setNavIsOpen(false)}>
            Listings
          </Link>
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
          <Link to="blog" onClick={() => setNavIsOpen(false)}>
            Blog
          </Link>
          <Link to="contact" onClick={() => setNavIsOpen(false)}>
            Contact
          </Link>
          <Link to="faq" onClick={() => setNavIsOpen(false)}>
            FAQs
          </Link>
          {navIsOpen && (
            <div
              className="close-btn"
              onClick={() => {
                setNavIsOpen(false);
              }}
            >
              Close
            </div>
          )}
        </div>
      </StyledNav>
    </>
  );
};

export default Navbar;
