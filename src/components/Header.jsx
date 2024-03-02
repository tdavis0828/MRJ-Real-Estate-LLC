import React from 'react';
import { StyledHeader } from '../styles/Stylesheet';
import logoV2 from '../images/logoV2.png';

function Header() {
  return (
    <StyledHeader>
      <img src={logoV2} alt="company logo" />
    </StyledHeader>
  );
}

export default Header;
