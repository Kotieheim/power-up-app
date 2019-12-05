import React, { Component } from "react";
import "./Registerpage.css";

export class Registerpage extends Component {
  handleSubmit = ev => {
    ev.preventDeafult();
    const { first_name, last_name, user_name, password } = ev.target;

    this.setState({ error: null });

    first_name.value = "";
    last_name.value = "";
    user_name.value = "";
    password.value = "";
  };

  render() {
    return (
      <div className="Register_form">
        <p className="Form_title">User register</p>
        <form>
          <div>
            <label htmlFor="Register_first_name">First name</label>
            <input name="first_name" id="Register_first_name" required></input>
          </div>
          <div>
            <label htmlFor="Register_last_name">Last name</label>
            <input name="last_name" id="Register_last_name" required></input>
          </div>
          <div className="user_name">
            <label htmlFor="Register_user_name">User name</label>
            <input name="user_name" id="Register_user_name" required></input>
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
