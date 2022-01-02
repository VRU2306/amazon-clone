import React from "react";
import "./footer.css";

import AmazonLogo from "../assets/amazon_logo.png";


function Footer() {
  return (
    <div className="footerMain">
      <img src={AmazonLogo} alt="footer logo" className="footerLogo" />

      <ul>

        <li>India</li>
       
      </ul>

      <ul>
        <li>Conditions of Use & sale</li>
        <li>Privacy Notice</li>
        <li>Amazon-clone with functions</li>
      </ul>
      </div>
  );
}

export default Footer;
