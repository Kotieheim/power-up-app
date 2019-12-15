import React, { Component } from "react";
import "./Exercisepage.css";
import { Link } from "react-router-dom";
// import Exerciseform from "../Exerciseform/Exerciseform";
import Exerciseitem from "../ExerciseItem/Exerciseitem";
import WorkoutsContext from "../WorkoutsContext";
import { findWorkout } from "../workout-helpers";

export default class Exercisepage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = WorkoutsContext;

  handleDeleteWorkout = workoutId => {
    this.props.history.push("/");
  };

  render() {
    const { workoutId } = this.props.match.params;
    const workout = findWorkout(this.context.workouts, workoutId);
    console.log(workout);
    return (
      <section className="Exercisepage">
        <Exerciseitem
        // id={workout.id}
        // muscle={workout.muscle}
        // exercise={workout.exercise}
        // exercise_sets={workout.exercise_sets}
        // reps={workout.reps}
        // weight_amount={workout.weight_amount}
        // date_created={workout.date_created}
        // summary={workout.summary}
        // onDeleteWorkout={this.handleDeleteWorkout}
        />
        <h2>Trying to get single note content to appear here</h2>
        <div className="Exercisepage__content"></div>
      </section>
    );
  }
}
