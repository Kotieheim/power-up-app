import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landingpage.css";

export class Landingpage extends Component {
  render() {
    return (
      <div className="Landingpage__main">
        <h2>Reach your goals and feel powerful</h2>
        <p className="Landingpage__slogan">
          The fire burns strong for strength as well as the satisfaction of
          breaking personal records. The benefit is for both physical and mental
          health
        </p>
        <Link to="/Exercise">
          <button className="Landingpage__button">Let's Power-UP!</button>
        </Link>
      </div>
    );
  }
}

export default Landingpage;
