import React, { Component } from "react";
import Exerciseitem from "../ExerciseItem/Exerciseitem";
import WorkoutsContext from "../WorkoutsContext";
import { getWorkoutsForWeekdays } from "../workout-helpers";
import { link } from "fs";
import "./ExerciseList.css";

export default class ExerciseList extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };
  static contextType = WorkoutsContext;
  render() {
    const { weekdayId } = this.props.match.params;
    const { workouts = [] } = this.context;
    const workoutsForWeekday = getWorkoutsForWeekdays(workouts, weekdayId);
    console.log(workouts);
    return (
      <section className="ExerciseList">
        <ul>
          {workoutsForWeekday.map(workout => (
            <li key={workout.id}>
              <Exerciseitem
                id={workout.id}
                muscle={workout.muscle}
                exercise={workout.exercise}
                exercise_sets={workout.exercise_sets}
                reps={workout.reps}
                weight_amount={workout.weight_amount}
                date_created={workout.date_created}
                summary={workout.summary}
              />
            </li>
          ))}
        </ul>
        <div className="ExerciseList__button">
          <button
            tag={link}
            to="/add-workout"
            type="button"
            className="ExerciseList__add-workout-button"
          >
            Add Workout
          </button>
        </div>
      </section>
    );
  }
}
