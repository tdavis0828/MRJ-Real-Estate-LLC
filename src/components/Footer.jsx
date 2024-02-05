import React from "react";
import { StyledFooter } from "../styles/Stylesheet";
import homeIcon from "../images/home-light.png";
import locationIcon from "../images/location-light.png";
import phoneIcon from "../images/telephone-light.png";
import emailIcon from "../images/email-light.png";
import logo from "../images/logo2-light.png";
import consultantLogo from "../images/consultant.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="realtor-info">
        <p>
          <img src={homeIcon} alt="/" />
          Marcy Jones
        </p>
        <p>
          <img src={locationIcon} alt="/" />
          5701 Truxtun ave. Ste #220 Bakersfield, CA 93309
        </p>
        <p>
          <img src={phoneIcon} alt="/" />
          (661) 319-3369
        </p>
        <p>
          <img src={emailIcon} alt="/" />
          Jonesrealty3369@gmail.com
        </p>
        <p className="urec">United Real Estate Consultants</p>
      </div>
      <div className="logo">
        <img src={logo} alt="/" />
        <div className="legal">
          <div className="legal-logos primary">
            <img
              src="https://equalhousinglogo.com/wp-content/uploads/2019/03/equal-housing-logowhite-250.png"
              alt="Equal Opportunity Housing Logo"
            />
            <img
              src="https://www.nar.realtor/sites/default/files/downloadable/nar_membershipmark_white.png"
              alt="Realtor.com Logo"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="legal secondary">
          <p>DRE#: 02081683</p>
          <p>UNSPSC: 80131600 / Tax EIN: 92-1387516</p>
          <p>DUNS: 118884164 / Certifications: SBE# 2030911</p>
          <p>SIC: 6531 Real Estate Agent Managers</p>
          <p>
            <img src={emailIcon} alt="/" />
            mrjrealestate@outlook.com
          </p>
        </div>
      </div>
      <div className="privacy-policy">
        <p>Privacy Policy</p>
        <p className="privacy-info">
          IDX information is provided exclusively for consumers personal,
          non-commercial, that it may not be used for any other purpose than to
          identify prospective properties consumers may be interested in
          purchasing, and that the information is deemed reliable but is not
          guaranteed, Copyright Golden Empire MLS, Inc. 2023
        </p>
      </div>
      <p className="copyright">
        Created by{" "}
        <a
          href="https://tdavis0828.github.io/portfoliov3/"
          target="_blank"
          rel="noreferrer"
        >
          Davis Digital Designs
        </a>{" "}
        Copyright © {currentYear}
      </p>
    </StyledFooter>
  );
};

export default Footer;
