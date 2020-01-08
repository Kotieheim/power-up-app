import React, { Component } from "react";
import WorkoutsContext from "../WorkoutsContext";
import WorkoutForm from "../WorkoutForm/WorkoutForm";
import "./AddExercise.css";
import config from "../config";
import PropTypes from "prop-types";

export default class AddExercise extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };
  static contextType = WorkoutsContext;

  state = {
    error: null
  };
  handleSubmit = e => {
    console.log("form submit");
    e.preventDefault();
    const {
      muscle,
      exercise,
      exercise_sets,
      reps,
      weight_amount,
      summary,
      weekday
    } = e.target;
    const workout = {
      muscle: muscle.value,
      exercise: exercise.value,
      exercise_sets: exercise_sets.value,
      reps: reps.value,
      weight_amount: weight_amount.value,
      summary: summary.value,
      weekday: weekday.value,
      date_created: new Date()
    };
    this.setState({ error: null });
    fetch(`${config.API_ENDPOINT}/workouts`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        muscle.value = "";
        exercise.value = "";
        exercise_sets.value = "";
        reps.value = "";
        weight_amount.value = "";
        summary.value = "";
        weekday.value = "";
        this.context.handleAddWorkout(data);
        this.props.history.push("/");
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  };
  render() {
    return (
      <div>
        <section className="AddWorkout">
          <h2>Add a workout</h2>
          <WorkoutForm onSubmit={this.handleSubmit}>
            <div className="form_summary">
              <label className="form__label" htmlFor="summary-input">
                Summary of workout
              </label>
              <textarea type="text" id="summary-input" name="summary" />
            </div>
            <div className="form__container">
              <div className="field">
                <label htmlFor="muscle-input">Muscle</label>
                <input type="text" id="muscle-input" name="muscle" required />
              </div>

              <div className="field">
                <label className="form__label" htmlFor="exercise-input">
                  Exercise
                </label>
                <input
                  type="text"
                  id="exercise-input"
                  name="exercise"
                  required
                />
              </div>

              <div className="field">
                <label className="form__label" htmlFor="exercise_sets-input">
                  Sets
                </label>
                <input
                  type="text"
                  id="exercise_sets-input"
                  name="exercise_sets"
                  required
                />
              </div>

              <div className="field">
                <label className="form__label" htmlFor="reps-input">
                  Reps
                </label>
                <input type="text" id="reps-input" name="reps" required />
              </div>

              <div className="field">
                <label className="form__label" htmlFor="weight_amount-input">
                  Weight
                </label>
                <input
                  type="text"
                  id="weight_amount-input"
                  name="weight_amount"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="form__label" htmlFor="weekday-select">
                Day of the week
              </label>
              <select id="weekday-select" name="weekday">
                <option value={null}>Choose weekday</option>
                {this.context.weekdays.map(weekday => (
                  <option
                    key={weekday.weekday_name}
                    name="weekday"
                    value={weekday.id}
                    required
                  >
                    {weekday.weekday_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="submit-button">
              <button type="submit">Submit Workout</button>
            </div>
          </WorkoutForm>
        </section>
      </div>
    );
  }
}
