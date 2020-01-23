import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from 'react-fontawesome'

function Footer() {
  return (
    <div className="footer">
    <Row>
        <Col>
        <p className="footText">Photos by credit</p>
        </Col>
        <vr></vr>
        <Col>
        <p className="footText">lucylanebooking@gmail.com</p>
        </Col>
        <vr></vr>
        <Col>
        <Link 
            className= "socialBtn"
            to="https://www.facebook.com/pg/LucyLaneLove/events/?ref=page_internal" 
            target="_blank" 
            >Facebook </Link>
            </Col>
        <vr></vr>
        <Col>
        <Link 
            className= "socialBtn"
            to="https://www.instagram.com/lucy._.lane/?hl=en"
            target="_blank" 
            >Instagram</Link>
        </Col>
     </Row>
    </div>

  );
}

export default Footer;