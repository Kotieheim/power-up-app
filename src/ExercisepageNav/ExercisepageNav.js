import React, { Component } from "react";
import WorkoutsContext from "../WorkoutsContext";
import { findWorkout, findWeekday } from "../workout-helpers";
import "./ExercisepageNav.css";

export default class ExercisepageNav extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {
      params: {}
    }
  };
  static contextType = WorkoutsContext;
  render() {
    const { workouts, weekdays } = this.context;
    const { workoutId } = this.props.match.params;
    const workout = findWorkout(workouts, workoutId) || {};
    const weekday = findWeekday(weekdays, workout.weekdayId);
    return (
      <div className="ExercisePageNav">
        <button
          tag="button"
          role="link"
          onClick={() => this.props.history.goBack()}
          className="ExercisePageNav__back-button"
        >
          Go back
        </button>
        {weekday && (
          <h3 classname="ExercisePageNav__weekday-name">
            {weekday.weekday_name}
          </h3>
        )}
      </div>
    );
  }
}
