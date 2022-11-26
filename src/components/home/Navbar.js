import React from "react";
import { Link } from "react-router-dom";
import willLogo from "../../components/home/homeImages/willLogo.jpeg";

const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false)

  function toggled(){
    console.log("yes")
  }
  return (
    
    <nav className="hp-nav">
      <div className="hp-nav-logo">
        <img src={willLogo} className="hp-will-logo" alt="logo" />
        <h1 className="hp-logo-text">PerfectWill</h1>
      </div>
      <div className="hp-nav-links">
      <Link to={"/"} id="home">
        Home
      </Link>
      <Link to={"/about"} id="ab-about">
        About
      </Link>
      <Link to={"/form"} id="nav-form-btn">
        GenerateWill
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
