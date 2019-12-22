import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Switch,
  Link
} from "react-router-dom";

import ExerciseListNav from "../ExerciseListNav/ExerciseListNav";
import ExercisepageNav from "../ExercisepageNav/ExercisepageNav";
import ExerciseList from "../ExerciseList/ExerciseList";
import Exercisepage from "../Exercisepage/Exercisepage";
import AddExercise from "../AddExercise/AddExercise";
import WorkoutsContext from "../WorkoutsContext";
import config from "../config";
import "./App.css";
import { findWorkout, findWeekday } from "../workout-helpers";
class App extends Component {
  state = {
    workouts: [],
    weekdays: []
  };
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/workouts`),
      fetch(`${config.API_ENDPOINT}/weekdays`)
    ])
      .then(([workoutsRes, weekdaysRes]) => {
        if (!workoutsRes.ok)
          return workoutsRes.json().then(e => Promise.reject(e));
        if (!weekdaysRes.ok)
          return weekdaysRes.json().then(e => Promise.reject(e));
        return Promise.all([workoutsRes.json(), weekdaysRes.json()]);
      })
      .then(([workouts, weekdays]) => {
        console.log(workouts, weekdays);
        this.setState({ workouts, weekdays });
      })
      .catch(error => {
        console.error({ error });
      });
  }
  handleAddWorkout = workout => {
    this.setState({
      workouts: [...this.state.workouts, workout]
    });
  };
  handleDeleteWorkout = workoutId => {
    this.setState({
      workouts: this.state.workouts.filter(workout => workout.id !== workoutId)
    });
  };
  renderNavRoutes() {
    const { workouts, weekdays } = this.state;
    return (
      <>
        <h1 className="App__title">
          <Link to="/">Power-Up!</Link>
        </h1>
        {["/", "/weekdays/:weekdayId"].map(path => (
          <Route exact key={path} path={path} component={ExerciseListNav} />
        ))}
        <Route
          path="/workouts/:workoutId"
          render={routeProps => {
            const { workoutId } = routeProps.match.params;
            const workout = findWorkout(workouts, workoutId) || {};
            const weekday = findWeekday(weekdays, workout.weekdayId);
            return <ExercisepageNav {...routeProps} weekday={weekday} />;
          }}
        />
      </>
    );
  }
  renderMainRoutes() {
    return (
      <>
        <Switch>
          {["/", "/weekdays/:weekdayId"].map(path => (
            <Route
              exact
              key={path}
              path={path}
              render={routeProps => {
                return <ExerciseList {...routeProps} />;
              }}
            />
          ))}
          <Route
            path="/workouts/:workoutId"
            render={routeProps => {
              return <Exercisepage {...routeProps} />;
            }}
          />
          <Route path="/add-workout" component={AddExercise} />
        </Switch>
      </>
    );
  }
  render() {
    return (
      <Router>
        <WorkoutsContext.Provider
          value={{
            workouts: this.state.workouts,
            weekdays: this.state.weekdays,
            handleAddWorkout: this.handleAddWorkout,
            handleDelete: this.handleDeleteWorkout
          }}
        >
          <div className="App">
            <nav className="App__nav">{this.renderNavRoutes()}</nav>
            <header className="App__header">
              <p>
                View all workouts logged, or sort by days of the week to see
                which workouts performed on which day!
              </p>
            </header>
            <main className="App__main">{this.renderMainRoutes()}</main>
          </div>
        </WorkoutsContext.Provider>
      </Router>
    );
  }
}

export default withRouter(App);
