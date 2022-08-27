import React from "react";
import "./navbar.scss";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <h2> Ruttika</h2>
      </div>
      <div className="nav-links">
        <Link smooth to="#Hero" className="nav-link">
          Home
        </Link>
        <Link smooth to="#Skill" className="nav-link">
          Skills
        </Link>
        <Link smooth to="#Certification" className="nav-link">
          Certifications
        </Link>
        <Link smooth to="#Portfolio" className="nav-link">
          Portfolio
        </Link>
        <Link smooth to="#Footer" className="nav-link">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
