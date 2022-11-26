import React from "react";
import Navbar from "../home/Navbar";

const About = () => {
  return (
    <div className="ab-about-page">
      <Navbar />
      <div className="ab-about-div">
        <h1 id="ab-about-title">What we do</h1>
        <p className="ab-text">
          Perfectwill is a team that offers guidance and directives to testators
          on how to write their last will and testament regarding how they want
          their assets distributed among their loved ones
        </p>
        <p className="ab-text">
          We add value by making sure the will is clearly drafted in accordance
          with the testator's wishes, and that your will is executed in
          accordance with applicable laws so that your will is valid and reduce
          the risk of a successful challenge.
        </p>
        <p className="ab-text">
          We make it possible and easy for you to appoint someone to manage your
          financial affairs if you become incapacitated or otherwise unable to
          manage your financial affairs on your own. We can also prepare the
          Power of Attorney, Health Care Proxy, Living Will, Self-Proving
          Affidavit, Trust Agreement and related documents.
        </p>
      </div>
    </div>
  );
};

export default About;
