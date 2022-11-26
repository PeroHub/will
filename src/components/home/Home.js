import React from "react";
import homeImg from "../../components/home/homeImages/homeImg.jpeg";
import Navbar from "../../components/home/Navbar"
import { Link } from "react-router-dom";
import "../../homePage.css";

import Free from '../../free.png'

export default function Home() {
  return (
     <div>
      <div className="hp-will-container">
     <Navbar />
        <div className="hp-main">
          <div className="hp-main-text">
            <h1 id="hp-title">Acquire peace of mind</h1>
            <p id="hp-will-info">
              It takes less than fifteen minutes to write your legal will and
              even less to update it at an affordable rate.
            </p>
            <div className="hp-link-div">
              {" "}
              <Link to={"/form"}>
                <button id="hp-form-btn">GenerateWill</button>
              </Link>
            </div>
          </div>
          <div id="hp-img-div">
            <img src={homeImg} id="hp-img" alt="homeImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
