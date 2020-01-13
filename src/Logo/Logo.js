import React, { Component } from "react";
import logopic from "./logopic.png";
import "./Logo.css";

export class Logo extends Component {
  render() {
    return (
      <div className="circleborder">
        <img id="logo" src={logopic} alt="weightlifting plate" />
      </div>
    );
  }
}

export default Logo;
