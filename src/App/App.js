import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Landingpage from "../Landingpage/Landingpage";
import WorkoutsContext from "../contexts/WorkoutsContext";
import Loginpage from "../Loginpage/Loginpage";
import Registerpage from "../Registerpage/Registerpage";
import Exercisepage from "../Exercisepage/Exercisepage";
import config from "../config";
import Exerciseform from "../Exerciseform/Exerciseform";
// import WorkoutsApiService from "../services/workouts-api-service";

export class App extends Component {
  state = {
    workouts: [],
    error: null
  };

  setWorkout = workouts => {
    this.setState({
      workouts,
      error: null
    });
  };
  addWorkout = workout => {
    this.setState({
      workouts: [...this.state.workouts, workout]
    });
  };
  deleteWorkout = workoutId => {
    const newWorkout = this.state.workouts.filter(
      work => work.id !== workoutId
    );
    this.setState({
      workouts: newWorkout
    });
  };
  updateWorkout = updatedWorkout => {
    this.setState({
      workouts: this.state.workouts.map(work =>
        work.id !== updatedWorkout.id ? work : updatedWorkout
      )
    });
  };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(this.setWorkout)
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  }
  render() {
    const contextValue = {
      workouts: this.state.workouts,
      addWorkout: this.addWorkout,
      deleteWorkout: this.deleteWorkout,
      updateWorkout: this.updateWorkout
    };
    return (
      <div className="App">
        <WorkoutsContext.Provider value={contextValue}>
          <header className="App__header">
            <Header />
          </header>
          <main className="App_main">
            {this.state.hasError && (
              <p classname="error_text">An error has occurred</p>
            )}
            <Switch>
              <Route exact path={"/"} component={Landingpage} />
              <Route path="/login" component={Loginpage}></Route>
              <Route path="/register" component={Registerpage}></Route>
              <Route
                path="/exercises"
                component={Exercisepage}
                onClickDelete={this.deleteWorkout}
              ></Route>
              <Route path="/exercise_form" component={Exerciseform}></Route>
            </Switch>
          </main>
        </WorkoutsContext.Provider>
      </div>
    );
  }
}

export default App;
