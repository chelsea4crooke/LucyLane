import React from "react";
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// import { Row, Col } from "reactstrap";




function Footer() {
  return (
    <div className="footer">
        <p className="footText">Photos credit Andre Magalhaes</p>
        {/* <SocialIcon <p className="footText">lucylanebooking@gmail.com</p> */}
        <SocialIcon url="https://www.facebook.com/pg/LucyLaneLove/events/?ref=page_internal" target="_blank"/>

        <SocialIcon url="https://www.instagram.com/lucy._.lane/?hl=en" target="_blank"/>
    </div>

  );
}

export default Footer;