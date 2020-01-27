import React from 'react';
import { PropTypes } from 'prop-types';
import Jumbotron from "../Jumbotron";
import Iframe from "../Iframe";
import "../Jumbotron";
import "./hiddenPg.css";

class Hidden extends React.Component {
    render(){
        return (
            <main className="hiddenBody">
            <Jumbotron>
                <h1 className="display-4">Lucy Lane Directions</h1>
                <p className="lead">Please read carefully.</p>
              <br></br>
            </Jumbotron>
            <div className="container">
              <div className="address">
                <p> The Lucy Lane house is located at the end of a woodsy, quarter mile driveway that runs alongside interstate 150 - Chippenham Pkwy- just a 12 minute drive outside of Richmond City.</p>

                <p>As you arrive at the driveway you will see a column of signs including STOP, Do Not Enter No Outlet and a green "Lucy Lane" street sign. </p>
                <p>**If you dont see these signs in the photograph down below you're in the wrong place. Do Not pass go, do not collect $200.**</p>

                <p>Parking is available on the property however we ask that whenver possible you would please carpool or use a rideshare service. Parking is located along the right side of the driveway along the fence to the highway. If parking becomes full at any given show, there is free public parking in a deck at Chippenham Hospital (about a 5 minute walk but there are some spots without sidewalk) but please be courteous of hospital patrons.</p>

                <p>Every show at Lucy Lane is BYOB. </p>

                <p>The show is welcome to everyone over the age of 18 and you will be carded if you're drinking.</p>

                <p>Please reference these pictures and maps to help you out! The address for the show is as follows: </p>

                <p>7310 Jahnke Rd Chesterfield, Va 23225</p>
            </div>
             <img className="drivewayPic"  src={require('../../img/driveway.jpg')} alt="Lucy Lane driveway" />
            <br/>
            <Iframe />
       </div>
       </main>
      )
    };
 }
Hidden.propTypes = {
    text: PropTypes.string.isRequired
  };

export default Hidden;