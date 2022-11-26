import React from "react";
import { Link } from "react-router-dom";
import willLogo from "../../components/home/homeImages/willLogo.jpeg";

const Navbar = () => {
  return (
    <div>
      <nav className="hp-nav">
        <div className="hp-nav-logo">
          <img src={willLogo} className="hp-will-logo" alt="logo" />
          <h1 className="hp-logo-text">Perfectwill</h1>
        </div>
        <Link to={"/about"} id="ab-about">
          About
        </Link>
        
      </nav>
    </div>
  );
};

export default Navbar;
