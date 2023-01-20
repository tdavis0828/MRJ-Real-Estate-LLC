import React, { useState, useEffect } from 'react';
import { StyledHero } from '../styles/Stylesheet';
import logoLight from '../images/logo-light.png';
import logoDark from '../images/logo-dark.png';
import menuIconLight from '../images/hamburger-light.png';
import menuIconDark from '../images/hamburger-dark.png';
import phoneLight from '../images/phone-light.png';
import phoneDark from '../images/phone-dark.png';
import cellphoneLight from '../images/smartphone-light.png';
import cellphoneDark from '../images/smartphone-dark.png';
import emailLight from '../images/email-light.png';
import emailDark from '../images/email-dark.png';
import houseLight from '../images/home-light.png';
import houseDark from '../images/home-dark.png';

const Hero = () => {
  const [scrollPostion, setScrollPostion] = useState();

  function getPostion() {
    setScrollPostion(window.scrollY);
    console.log(scrollPostion);
  }

  useEffect(() => {
    window.addEventListener('scroll', getPostion, { passive: true });
  });

  return (
    <StyledHero>
      <div className="logo">
        <img
          src={scrollPostion > 800 ? logoDark : logoLight}
          alt="company logo"
        />
      </div>

      <div className="text-content">
        <p>Marcy Renee Jones Realty, LLC.</p>
        <button type="button">Contact Us</button>
      </div>

      <div className="menu-icon">
        <button type="button" className="navbar-btn">
          <img
            src={scrollPostion > 850 ? menuIconDark : menuIconLight}
            alt="hamburger menu"
          />
        </button>
      </div>

      <div className="contact-links">
        <a href="/" target="_blank">
          <img
            src={scrollPostion > 100 ? phoneDark : phoneLight}
            alt="Office Phone Number"
          />
        </a>
        <a href="/" target="_blank">
          <img
            src={scrollPostion > 100 ? cellphoneDark : cellphoneLight}
            alt="Cell Phone Number"
          />
        </a>
        <a href="/" target="_blank">
          <img
            src={scrollPostion > 100 ? emailDark : emailLight}
            alt="Email Address"
          />
        </a>
        <a href="/" target="_blank">
          <img
            src={scrollPostion > 100 ? houseDark : houseLight}
            alt="Link to realtors.com"
          />
        </a>
      </div>

      {/* <div className="dre-number">
        <p className={scrollPostion > 100 ? 'dark-text' : ''}>
          4900 California Avenue, Bakersfield , CA, 93309
        </p>
        <p className={scrollPostion > 100 ? 'dark-text' : ''}>DRE#: 02081683</p>
      </div> */}
    </StyledHero>
  );
};

export default Hero;
