import React, { Component } from "react";
import "./Registerpage.css";

export class Registerpage extends Component {
  render() {
    return (
      <div className="Register_form">
        <p className="Form_title">User register</p>
        <form>
          <div>
            <label htmlFor="Register_user_name">First name</label>
            <input
              name="Login_user_name"
              id="Login_form_user_name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="Register_user_name">Last name</label>
            <input
              name="Login_user_name"
              id="Login_form_user_name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="Register_user_name">Email</label>
            <input
              name="Login_user_name"
              id="Login_form_user_name"
              required
            ></input>
          </div>
          <div className="user_name">
            <label htmlFor="Register_user_name">User name</label>
            <input
              name="Login_user_name"
              id="Login_form_user_name"
              required
            ></input>
          </div>
          <div className="password">
            <label htmlFor="Register_password">Password</label>
            <input
              required
              name="password"
              type="password"
              id="Register_password"
            ></input>
          </div>
          <button id="Register_button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Registerpage;
