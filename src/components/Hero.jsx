import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyledHero } from "../styles/Stylesheet";
import logoLight from "../images/logo-light.png";
import menuIconLight from "../images/hamburger-light.png";
import cellphoneLight from "../images/smartphone-light.png";
import emailLight from "../images/email-light.png";
import houseLight from "../images/home-light.png";
import { setIsOpen } from "../store/NavbarSlice";
// import backgroundVideo from '../images/backgroundVideo.mp4';

const Hero = () => {
  const dispatch = useDispatch();
  const [scrollPostion, setScrollPostion] = useState();

  function getPostion() {
    setScrollPostion(window.scrollY);
  }

  function handleClick() {
    dispatch(setIsOpen(true));
  }

  useEffect(() => {
    window.addEventListener("scroll", getPostion, { passive: true });
  });

  return (
    <StyledHero id="home">
      {/* <div className="background-video-container">
        <div className="overlay" />
        <video autoPlay muted>
          <source src={backgroundVideo} type="video/mp4"></source>
        </video>
      </div> */}
      <div className="logo">
        <img src={logoLight} alt="company logo" />
      </div>

      <div className="text-content">
        <p>Marcy Renae Jones Realty, LLC.</p>
        <div className="hero-buttons-container">
          <a href="#certifications">Contact Realtor</a>
          <hr></hr>
          <a href="#certifications">Licensing</a>
        </div>
      </div>

      <div className="menu-icon">
        <button type="button" className="navbar-btn" onClick={handleClick}>
          <img src={menuIconLight} alt="hamburger menu" />
        </button>
      </div>

      <div className="contact-links">
        <a href="tel:6613193369">
          <img src={cellphoneLight} alt="Cell Phone Number" />
        </a>
        <a href="mailto: jonesrealty3369@gmail.com">
          <img src={emailLight} alt="Email Address" />
        </a>
        <a
          href="https://www.realtor.com/realestateagents/5f4925e3b4e2f10011c4342b"
          target="_blank"
          rel="noreferrer"
        >
          <img src={houseLight} alt="Link to realtors.com" />
        </a>
      </div>
    </StyledHero>
  );
};

export default Hero;
