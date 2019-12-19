import React, { Component } from "react";
import "./Exercisepage.css";
import Exerciseitem from "../ExerciseItem/Exerciseitem";
import WorkoutsContext from "../WorkoutsContext";
import { findWorkout } from "../workout-helpers";
import PropTypes from "prop-types";

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
        <h2>{workout.summary}</h2>
        <div className="Exercisepage__content"></div>
      </section>
    );
  }
}

// Exercisepage.defaultProps = {
//   workouts: {
//     content: ""
//   }
// };

Exercisepage.propTypes = {
  workoutId: PropTypes.string
};
