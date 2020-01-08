import React, { Component } from "react";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import WorkoutsContext from "../WorkoutsContext";

export class LoginForm extends Component {
  static contextType = WorkoutsContext;
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
        console.log(this.state);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red_error">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="Login_user_name">User name</label>
          <input required name="user_name" id="Login_user_name"></input>
        </div>

        <div className="password">
          <label htmlFor="login_password">password</label>
          <input required name="password" id="login_password"></input>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
