import React from 'react';
import { StlyedCertification } from '../styles/Stylesheet';

const Certifications = () => {
  return (
    <StlyedCertification id="certifications">
      <div className="cert-container">
        <h2>
          <em>Contact Details</em>
        </h2>
        <p>Call Us: (661) 319-3369</p>
        <p>
          Email Us:{' '}
          <a href="mailto:Jonesrealty3369@gmail.com">
            Jonesrealty3369@gmail.com
          </a>
        </p>
        <p>
          Website:{' '}
          <a href="mjrealty.com" target="_blank">
            MJRealty.com
          </a>
        </p>
      </div>
      <div className="cert-container">
        <h2>License Details</h2>
        <p>UNSPSC: 80131600 / Tax EIN: 92-1387516</p>
        <p>DUNS: 118884164 / Certifications: SBE# 2030911</p>
        <p>SIC: 6531 Real Estate Agent managers</p>
      </div>
    </StlyedCertification>
  );
};

export default Certifications;
