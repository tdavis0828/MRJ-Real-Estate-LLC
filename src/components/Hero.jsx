import React from "react";
import { StyledHero } from "../styles/Stylesheet";

const Hero = () => {
  return (
    <StyledHero id="home">
      <div className="overlay" />
      <div className="text-content">
        <p>Marcy Renae Jones Realty</p>
        <div className="hero-buttons-container">
          <a href="#certifications">Contact Realtor</a>
          <hr></hr>
          <a href="#certifications">Licensing</a>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
