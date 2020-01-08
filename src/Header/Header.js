import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import "./Header.css";
import WorkoutsContext from "../WorkoutsContext";

export class Header extends Component {
  static contextType = WorkoutsContext;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    console.log(this.state);
  };

  renderLogoutLink() {
    return (
      <div className="Header__Logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }
  render() {
    return (
      <nav>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default Header;
