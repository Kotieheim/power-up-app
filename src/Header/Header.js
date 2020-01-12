import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import "./Header.css";

export class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.setState({
      isLoggedIn: false
    });
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
      <div>
        <nav>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
        <p className="Header_saying">
          View all workouts logged, or sort by days of the week!
        </p>
      </div>
    );
  }
}

export default Header;
