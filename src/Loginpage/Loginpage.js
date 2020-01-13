import React, { Component } from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./Loginpage.css";
import WorkoutsContext from "../WorkoutsContext";

// Route used to render the login form and display a
// dummy profile to log in

export class Loginpage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  static contextType = WorkoutsContext;

  handleLoginSuccess = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="login_page">
          <h2>Login</h2>

          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </div>
        <section className="dummy_profile">
          <h1>Dummy profile</h1>
          <p>username:</p>
          <h2>dunder</h2>
          <p>password:</p>
          <h2>P@ssw0rd!</h2>
        </section>
      </div>
    );
  }
}

export default Loginpage;
