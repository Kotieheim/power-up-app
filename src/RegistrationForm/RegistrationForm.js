import React, { Component } from "react";
import AuthApiService from "../services/auth-api-service";

export class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    const { full_name, user_name, password } = e.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      full_name: full_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = "";
        full_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red-error">{error}</p>}</div>
        <div className="register_field">
          <label htmlFor="RegistrationForm_user_name">User Name</label>
          <input
            required
            name="user_name"
            type="text"
            id="RegistrationForm_user_name"
          ></input>
        </div>
        <div className="register_field">
          <label htmlFor="RegistrationForm_full_name">Full Name</label>
          <input
            required
            name="full_name"
            type="text"
            id="RegistrationForm_full_name"
          ></input>
        </div>
        <div className="register_field">
          <label htmlFor="RegistrationForm_password">Password</label>
          <input
            required
            name="password"
            type="text"
            id="RegistrationForm_password"
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
