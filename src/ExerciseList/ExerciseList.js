import React, { Component } from "react";
import Exerciseitem from "../ExerciseItem/Exerciseitem";
import WorkoutsContext from "../WorkoutsContext";
import { getWorkoutsForWeekdays } from "../workout-helpers";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./ExerciseList.css";

// Renders all added workouts for user.

export default class ExerciseList extends Component {
  static defaultProps = {
    onDeleteWorkout: () => {}
  };
  static contextType = WorkoutsContext;
  render() {
    const { weekdayId } = this.props.match.params;
    return (
      <section className="ExerciseList">
        <NavLink
          to="/add-workout"
          type="button"
          className="ExerciseList__add-workout-button"
        >
          Add Workout
        </NavLink>
        <ul>
          {getWorkoutsForWeekdays(this.context.workouts, weekdayId).map(
            workout => (
              <li key={workout.id}>
                <Exerciseitem
                  id={workout.id}
                  muscle={workout.muscle}
                  date_created={workout.date_created}
                  handleDelete={this.context.handleDelete}
                />
              </li>
            )
          )}
        </ul>
        <div className="ExerciseList__button"></div>
      </section>
    );
  }
}

ExerciseList.defaultProps = {
  workouts: []
};
ExerciseList.propTypes = {
  weekdayId: PropTypes.string
};
