import React, { Component } from "react";
import "./Loginpage.css";

export class Loginpage extends Component {
  render() {
    return (
      <div className="Login_form">
        <p className="Form_title">User login</p>
        <form>
          <div className="user_name">
            <label htmlFor="Login_user_name">User name</label>
            <input
              name="Login_user_name"
              id="Login_form_user_name"
              required
            ></input>
          </div>
          <div className="password">
            <label htmlFor="Login_password">Password</label>
            <input
              required
              name="password"
              type="password"
              id="Login_password"
            ></input>
          </div>
          <button id="Login_button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Loginpage;
