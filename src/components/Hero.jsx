import React from "react";
import { StyledHero } from "../styles/Stylesheet";

// import backgroundVideo from "../images/backgroundVideo.mp4";

const Hero = () => {
  return (
    <StyledHero id="home">
      {/* <div className="background-video-container">
        <div className="overlay" />
        <video autoPlay muted>
          <source src={backgroundVideo} type="video/mp4"></source>
        </video>
      </div> */}

      <div className="text-content">
        <p>Marcy Renae Jones Realty, LLC.</p>
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
