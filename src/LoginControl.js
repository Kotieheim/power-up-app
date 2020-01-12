import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "./services/token-service";

function LoginButton(props) {
  return <Link to="/login">Login</Link>;
}

function LogoutButton(props) {
  return (
    <Link to="/" onClick={props.handleLogoutClick()}>
      Logout
    </Link>
  );
}

export class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
    TokenService.clearAuthToken();
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let links;

    return <div></div>;
  }
}

export default LoginControl;
