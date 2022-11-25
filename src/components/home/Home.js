import React from "react";
import willLogo from "../../components/home/homeImages/willLogo.jpeg";
import homeImg from "../../components/home/homeImages/homeImg.jpeg";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Home() {
  return (
    <div>
      <div className="will-container">
        <nav className="bg-red-400">
          <div className="nav-logo">
            <img src={willLogo} className="will-logo" alt="logo" />
            <h1 className="logo-text">Perfectwill</h1>
          </div>
          <Link to={"/about"} id="about">
            About
          </Link>
        </nav>
        <div className="main">
          <div className="main-text">
            <h1 id="title">Acquire peace of mind</h1>
            <p id="will-info">
              It takes less than fifteen minutes to write your legal will and
              even less to update it at an affordable rate.
            </p>
            <div className="link-div">
              {" "}
              <Link to={"/form"}>
                <button id="form-btn">Generate my will</button>
              </Link>
            </div>
          </div>
          <div id="img-div">
            <img src={homeImg} id="img" alt="home-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
