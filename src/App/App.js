import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Switch,
  Link
} from "react-router-dom";
import Header from "../Header/Header";
import ExerciseListNav from "../ExerciseListNav/ExerciseListNav";
import ExercisepageNav from "../ExercisePageNav/ExercisepageNav";
import ExerciseList from "../ExerciseList/ExerciseList";
import Exercisepage from "../Exercisepage/Exercisepage";
import AddExercise from "../AddExercise/AddExercise";
import WorkoutsContext from "../WorkoutsContext";
import Loginpage from "../LoginPage/Loginpage";
import config from "../config";
import "./App.css";
import { findWorkout, findWeekday } from "../workout-helpers";
import weekdaysStore from "../Weekdays-store";
import Footer from "../Footer/Footer";
import Registerpage from "../Registerpage/Registerpage";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import TokenService from "../services/token-service";

class App extends Component {
  state = {
    isLoggedIn: false,
    user: {},
    workouts: [],
    weekdays: [...weekdaysStore]
  };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/workouts`, {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
        "content-type": "application/json"
      }
    })
      .then(workoutsRes => {
        if (!workoutsRes.ok) {
          return workoutsRes.json().then(e => Promise.reject(e));
        }
        return workoutsRes.json();
      })
      .then(workouts => {
        this.setState({ workouts });
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
          <Link to="/">
            <h2>Power Up</h2>
          </Link>
        </h1>
        {["/", "/weekdays/:weekdayId"].map(path => (
          <Route exact key={path} path={path} component={ExerciseListNav} />
        ))}
        <Route
          path={["/workouts/:workoutId", "/add-workout", "/login", "/register"]}
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
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };
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

          <Route path="/login" component={Loginpage} />
          <Route path="/register" component={Registerpage} />
          <Route path="/add-workout" component={AddExercise} />
        </Switch>
      </>
    );
  }
  render() {
    let { isLoggedIn } = this.state;
    console.log(isLoggedIn);
    return (
      <Router>
        <WorkoutsContext.Provider
          value={{
            user: this.state.user,
            isLoggedIn: this.logout,
            workouts: this.state.workouts,
            weekdays: this.state.weekdays,
            handleAddWorkout: this.handleAddWorkout,
            handleDelete: this.handleDeleteWorkout,
            handleLogin: this.handleLogin
          }}
        >
          <div className="App">
            <nav className="App__nav">{this.renderNavRoutes()}</nav>
            <header className="App__header">
              <Header isLoggedIn={isLoggedIn} />
            </header>
            <main className="App__main">{this.renderMainRoutes()}</main>
            <Footer />
          </div>
        </WorkoutsContext.Provider>
      </Router>
    );
  }
}

export default withRouter(App);
