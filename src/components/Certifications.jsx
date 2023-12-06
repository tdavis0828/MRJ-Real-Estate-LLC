import React from 'react';
import { StlyedCertification } from '../styles/Stylesheet';
import { Link } from 'react-router-dom';
const Certifications = () => {
  return (
    <StlyedCertification id="certifications">
      <div className="cert-container">
        <h2>
          <em>Realtor Contact</em>
        </h2>
        <p>Call Us: (661) 319-3369</p>
        <p>
          Email Us:{' '}
          <a href="mailto:Jonesrealty3369@gmail.com">
            Jonesrealty3369@gmail.com
          </a>
        </p>
        <p>DRE#: 02081683</p>
        <Link to="contact" className="email-btn">
          Reach out
        </Link>
      </div>
      <div className="cert-container">
        <h2>SBE License</h2>
        <p>UNSPSC: 80131600 / Tax EIN: 92-1387516</p>
        <p>DUNS: 118884164 / Certifications: SBE# 2030911</p>
        <p>SIC: 6531 Real Estate Agent managers</p>
        <Link to="capabilities" className="email-btn">
          Capabilities
        </Link>
      </div>
    </StlyedCertification>
  );
};

export default Certifications;
