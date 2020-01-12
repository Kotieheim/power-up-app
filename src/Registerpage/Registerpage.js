import React, { Component } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import "./Registerpage.css";

export class Registerpage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };
  render() {
    return (
      <div className="register_page">
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}

export default Registerpage;
