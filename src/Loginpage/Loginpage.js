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
  static contextType = WorkoutsContext;

  handleLoginSuccess = () => {
    this.props.history.push("/");
  };
  render() {
    console.log(this.context);
    return (
      <div className="login_page">
        <h2>Login</h2>

        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}

export default Loginpage;
