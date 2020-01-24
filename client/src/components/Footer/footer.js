import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./footer.css";




function Footer() {
  return (
    <div className="footer">
        <a href="https://www.andremagsphotography.com" className="photo" target="_blank" rel="noopener noreferrer">Photography by Andre Magalhaes</a>
        <SocialIcon url="https://www.facebook.com/pg/LucyLaneLove/events/?ref=page_internal" className="socialBtn" target="_blank" rel="noopener noreferrer"/>
        <SocialIcon url="https://www.instagram.com/lucy._.lane/?hl=en" className="socialBtn"  target="_blank" rel="noopener noreferrer"/>
        <SocialIcon url="mailto:lucylanebooking@gmail.com" className="socialBtn"  target="_blank" rel="noopener noreferrer"/>
    </div>

  );
}

export default Footer;