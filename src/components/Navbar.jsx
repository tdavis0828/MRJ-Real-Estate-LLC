import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "../styles/Stylesheet";

const Navbar = () => {
  return (
    <StyledNav>
      <div className="nav-links">
        <Link to="home">Home</Link>
        <Link to="listings">Listings</Link>
        <Link to="resources">Resources</Link>
        <Link to="contact">Contact</Link>
        <Link to="#faqs">FAQs</Link>
        <Link to="blog">Blog</Link>
      </div>
      {/* <div className="nav-info">
        <p>9312 LaCroix court, Bakersfield, CA 93311</p>
        <p>DRE#: 02081683</p>
      </div> */}
    </StyledNav>
  );
};

export default Navbar;
