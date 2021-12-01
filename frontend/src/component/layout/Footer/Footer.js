import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="appStore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; ECOMMERCE </p>
      </div>

      <div className="rightFooter">
        <h4>Follow US</h4>
        <a href="http://instagram.com/ekanshev.06">Instagram</a>
        <a href="http://instagram.com/ekanshev.06">Youtube</a>
        <a href="http://instagram.com/ekanshev.06">FaceBook</a>
      </div>
    </footer>
  );
};

export default Footer;
