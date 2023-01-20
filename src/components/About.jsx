import React from 'react';
import { StyledAbout } from '../styles/Stylesheet';

const About = () => {
  return (
    <StyledAbout>
      <div className="about-container">
        <img
          src="https://ap.rdcpix.com/7f0e9ca475f1f6e543f686cdd6b3be71a-e2979978654sd-w260_h260_q50.jpg"
          alt="headshot of Marcy Jones"
        />
        <div className="dre-info">
          <p>DRE#: 02081683</p>
          {/* <p>4900 California Avenue, Bakersfield , CA, 93309</p> */}
        </div>
        <p>
          I am <span>Marcy Jones</span> a Kern County Resident and Realtor. I am
          committed to ensuring that all of your real estate needs are not just
          met, but exceeded! I will make sure that the process is
          understandable, transparent and rewarding every step of the way. One
          things for certain, you're going to love the results! I look forward
          to representing you when you decide it's the time to buy or sell.
          Please don't hesitate to reach out with any questions you may have.
        </p>
      </div>
    </StyledAbout>
  );
};

export default About;
