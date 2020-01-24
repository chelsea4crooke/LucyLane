import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./home.css";
// import About from "../about/About";
class Landing extends Component {
 render() {
    return (
      <main className="landBody">
      <br></br>
      <div className="container">
        <h1 className="display-4 big">Lucy Lane</h1>
           <p className="lead">Lucy Lane is an artistic outlet for anyone wanting to expand and share their respective craft, with a direct focus on music. All artists are welcome to come indulge, and make our habitat a place of warm fuzzy feelings and beautiful expression.</p>
           <hr></hr>
          <Link className="mainBtn btn-lg btn-primary"
            to="/about">Learn more</Link>
              <br></br>
        </div>
      </main>
    );
  }
}
export default Landing;