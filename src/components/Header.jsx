import React from "react";
import { StyledHeader } from "../styles/Stylesheet";
import logo from "../images/logo2-dark.png";

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="company logo" />
    </StyledHeader>
  );
}

export default Header;
