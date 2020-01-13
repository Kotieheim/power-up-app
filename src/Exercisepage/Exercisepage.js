import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Exercisepage.css";
import Exerciseitem from "../ExerciseItem/Exerciseitem";
import WorkoutsContext from "../WorkoutsContext";
import { findWorkout } from "../workout-helpers";
import PropTypes from "prop-types";

// Full detailed workout page using information from database

export default class Exercisepage extends Component {
  static contextType = WorkoutsContext;
  handleDelete = workoutId => {
    this.props.history.push("/");
  };
  render() {
    const { workoutId } = this.props.match.params;
    const workout = findWorkout(this.context.workouts, workoutId);
    if (workout === undefined) {
      return null;
    }
    return (
      <section className="Exercisepage">
        <Exerciseitem
          id={workout.id}
          muscle={workout.id}
          summary={workout.summary}
          onDeleteWorkout={this.handleDelete}
        />
        <h1>{workout.exercise}</h1>
        <ul className="Exercisepage__list-workout">
          <li className="item-of-interest">{workout.exercise_sets}</li>
          <li>X</li>
          <li className="item-of-interest">{workout.reps}</li>
          <li>at</li>
          <li className="item-of-interest">{workout.weight_amount} lbs</li>
        </ul>
        <h2 className="Exercisepage__summary">{workout.summary}</h2>
        <NavLink
          to="/add-workout"
          type="button"
          className="ExerciseList__add-workout-button"
        >
          Add Workout
        </NavLink>
      </section>
    );
  }
}

Exercisepage.propTypes = {
  workoutId: PropTypes.string
};
