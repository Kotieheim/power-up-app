import React, { Component } from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./Loginpage.css";
import WorkoutsContext from "../WorkoutsContext";

export class Loginpage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    // const { location, history } = this.props;
    // const destination = (location.state || {}).from || "/";
    // history.push(destination);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="LoginPage">
        <h2>Login</h2>

        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}

export default Loginpage;
