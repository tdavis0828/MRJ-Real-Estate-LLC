import React from 'react';
import { StyledHero } from '../styles/Stylesheet';
import { motion } from 'framer-motion';
import newLogo from '../images/logo-new (1).jpg';

const Hero = () => {
  return (
    <StyledHero id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-content"
      >
        <img src={newLogo} className="hero-image" alt="hero-logo" />
        <div className="hero-buttons-container">
          <a href="#certifications">Contact Realtor</a>
          <hr></hr>
          <a href="#certifications">SBE License</a>
        </div>
      </motion.div>
    </StyledHero>
  );
};

export default Hero;
