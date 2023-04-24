import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledNav } from '../styles/Stylesheet';
import closeBtn from '../images/close.png';
import { setIsOpen } from '../store/NavbarSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.navbar);

  function handleClick() {
    dispatch(setIsOpen(false));
    console.log(isOpen);
  }
  return (
    <StyledNav className={isOpen === false ? 'closed' : 'open'}>
      <div className="close-icon">
        <img src={closeBtn} alt="close icon" onClick={handleClick} />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#faqs">FAQs</a>
      </div>
      <div className="nav-info">
        <p>9312 LaCroix court, Bakersfield, CA 93311</p>
        <p>DRE#: 02081683</p>
      </div>
    </StyledNav>
  );
};

export default Navbar;
