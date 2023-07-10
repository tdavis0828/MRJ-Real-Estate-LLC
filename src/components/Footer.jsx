import React from "react";
import { StyledFooter } from "../styles/Stylesheet";
import { Link } from "react-router-dom";
import homeIcon from "../images/home-light.png";
import locationIcon from "../images/location-light.png";
import phoneIcon from "../images/telephone-light.png";
import emailIcon from "../images/email-light.png";
import instagramIcom from "../images/instagram.png";
import linkedInIcon from "../images/linkedin.png";
import facebookIcon from "../images/facebook-app-symbol.png";
import logo from "../images/logo2-light.png";
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
          9312 Lacroix Ct, Bakersfield, CA 93311
        </p>
        <p>
          <img src={phoneIcon} alt="/" />
          (661) 319-3369
        </p>
        <p>
          <img src={emailIcon} alt="/" />
          Jonesrealty3369@gmail.com
        </p>
        <div className="socials">
          <Link to="/">
            <img src={instagramIcom} alt="Instagram Icon" />
          </Link>
          <Link to="/">
            <img src={linkedInIcon} alt="Linked In Icon" />
          </Link>
          <Link to="/">
            <img src={facebookIcon} alt="Facebook Icon" />
          </Link>
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="/" />
      </div>
      <div>
        <div className="legal">
          <p>DRE#: 02081683</p>
          <p>UNSPSC: 80131600 / Tax EIN: 92-1387516</p>
          <p>DUNS: 118884164 / Certifications: SBE# 2030911</p>
          <p>SIC: 6531 Real Estate Agent Managers</p>

          <div className="legal-logos">
            <img
              src="https://equalhousinglogo.com/wp-content/uploads/2019/03/equal-housing-logowhite-250.png"
              alt="Equal Opportunity Housing Logo"
            />
            <img
              src="https://www.nar.realtor/sites/default/files/downloadable/web_R_blue.jpg"
              alt="Equal Opportunity Housing Logo"
            />
          </div>
        </div>
      </div>
      <p className="copyright">
        Created by <a href="/">Davis Digital Designs</a> Copyright ©{" "}
        {currentYear}
      </p>
    </StyledFooter>
  );
};

export default Footer;
