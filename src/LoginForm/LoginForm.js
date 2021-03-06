import React, { Component } from "react";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import WorkoutsContext from "../WorkoutsContext";
// dummy login profile
// user_name: dunder
// password: P@ssw0rd!
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
        this.context.handleLogin();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">
            {error && <p className="red_error">{error}</p>}
          </div>
          <div className="login_field">
            <label htmlFor="Login_user_name">User name</label>
            <input required name="user_name" id="Login_user_name"></input>
          </div>

          <div className="login_field">
            <label htmlFor="login_password">password</label>
            <input required name="password" id="login_password"></input>
          </div>
          <button
            className="login_button"
            onClick={this.props.handleLogin}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
