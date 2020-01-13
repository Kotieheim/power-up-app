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

        <p className="Header_saying_1">
          Must be logged in to view or add workouts. Visit Login page{" "}
          <Link to="/login">Here</Link> to use a dummy login or as a returning
          user. Attempt to add workout without being logged in will redirect to
          login page
        </p>
      </div>
    );
  }
}

export default Header;
