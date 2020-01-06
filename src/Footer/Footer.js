import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer__phantom-div" />
        <div className="footer__style">
          <p>Dakota Heim</p>
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
