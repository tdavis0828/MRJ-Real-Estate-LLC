import React, { useState, useEffect } from 'react';
import logo from '../images/logo2-light.png';
import { Link } from 'react-router-dom';
import { StyledHero } from '../styles/Stylesheet';
import { motion } from 'framer-motion';

const Hero = () => {
  const [divScroll, setDivScroll] = useState();
  useEffect(() => {
    const certDiv = document.getElementById('certifications');
    setDivScroll(certDiv);
  }, []);

  return (
    <StyledHero id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-content"
      >
        <img src={logo} className="hero-image" alt="hero-logo" />
        <div className="hero-buttons-container">
          <Link to="contact" className="hero-btns">
            Contact Realtor
          </Link>
          <hr></hr>
          <button
            className="hero-btns"
            onClick={() => {
              if (divScroll) {
                divScroll.scrollIntoView();
              }
            }}
          >
            SBE License
          </button>
        </div>
      </motion.div>
    </StyledHero>
  );
};

export default Hero;
