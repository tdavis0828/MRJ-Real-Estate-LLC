import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledNav } from "../styles/Stylesheet";
import closeBtn from "../images/close.png";
import { setIsOpen } from "../store/NavbarSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.navbar);

  function handleClick() {
    dispatch(setIsOpen(false));
    console.log(isOpen);
  }
  return (
    <StyledNav className={isOpen ? "open" : " "}>
      <div className="close-icon">
        <img src={closeBtn} alt="close icon" onClick={handleClick} />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">FAQ</a>
      </div>
      <div className="nav-info">
        <p>4900 California Avenue, Bakersfield , CA, 93309</p>
        <p>DRE#: 02081683</p>
      </div>
    </StyledNav>
  );
};

export default Navbar;
