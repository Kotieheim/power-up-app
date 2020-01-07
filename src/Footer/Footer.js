import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer__phantom-div" />
        <div className="footer__style">
          <p className="footer__name">Dakota Heim</p>
          <ul className="footer__links">
            <li>
              <a
                href="https://github.com/Kotieheim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Github</li>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dakotaheim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>LinkedIn</li>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
