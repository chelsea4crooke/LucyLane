import React, { Component } from "react";
import { Container } from "../Grid";
import { Link } from "react-router-dom";

import "./home.css";
// import About from "../about/About";
class Landing extends Component {
  handleClick= (event) => {
    event.preventDefault();
    console.log('button clicked:', this);
  }
 render() {
    return (
      <body>
        <br></br>
       <Container>
        <h1 className="display-4 big">Lucy Lane</h1>
           <p className="lead">Lucy Lane is an artistic outlet for anyone wanting to expand and share their respective craft, with a direct focus on music. All artists are welcome to come indulge, and make our habitat a place of warm fuzzy feelings and beautiful expression.</p>
           <hr></hr>
          <Link
            to="/about">Learn more</Link>
              <br></br>
          </Container>
      </body>
    );
  }
}
export default Landing;