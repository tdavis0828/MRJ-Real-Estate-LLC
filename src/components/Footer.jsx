import React from 'react';
import { StyledFooter } from '../styles/Stylesheet';

const Footer = () => {
  // const date = new Date()
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>
        Created by <a href="/">Davis Digital Designs</a> Copyright © {year}
      </p>
    </StyledFooter>
  );
};

export default Footer;
