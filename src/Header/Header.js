import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link className="Header_demo" to="/Exercise">
          Demo
        </Link>
        <Link className="Header_login" to="/login">
          Log in
        </Link>
        <Link className="Header_register" to="/register">
          Register
        </Link>
      </div>
    );
  }
  render() {
    return (
      <div>
        <nav className="Header">
          <h1>
            <Link to="/">Power-Up!</Link>
          </h1>
          {this.renderLoginLink()}
        </nav>
      </div>
    );
  }
}

export default Header;
