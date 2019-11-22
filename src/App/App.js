import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Landingpage from "../components/Landingpage/Landingpage";
import Loginpage from "../components/Loginpage/Loginpage";
import Registerpage from "../components/Registerpage/Registerpage";
import Exercisepage from "../components/Exercisepage/Exercisepage";

export class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <Switch>
          <Route exact path={"/"} component={Landingpage} />
          <Route path="/login" component={Loginpage}></Route>
          <Route path="/register" component={Registerpage}></Route>
          <Route path="/exercise" component={Exercisepage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
