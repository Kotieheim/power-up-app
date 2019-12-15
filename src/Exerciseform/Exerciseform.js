import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Exerciseform.css";
import config from "../config";
import WorkoutsContext from "../WorkoutsContext";

export default class Exerciseform extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  handleChange = e => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   const {
  //     date,
  //     muscle,
  //     exercise,
  //     exercise_sets,
  //     reps,
  //     weight_amount,
  //     summary
  //   } = e.target;
  //   const workout = {
  //     date: date.value,
  //     muscle: muscle.value,
  //     exercise: exercise.value,
  //     exercise_sets: exercise_sets.value,
  //     reps: reps.value,
  //     weight_amount: weight_amount.value,
  //     summary: summary.value
  //   };
  //   console.log(workout);
  //   this.setState({ error: null });
  //   fetch(config.API_ENDPOINT, {
  //     method: "POST",
  //     body: JSON.stringify(workout),
  //     headers: {
  //       "content-type": "application/json"
  //     }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         return res.json().then(error => Promise.reject(error));
  //       }
  //       return res.json;
  //     })
  //     .then(data => {
  //       console.log(data);
  //     });
  // };
  constructor() {
    super();
    this.state = {
      error: null,
      date: "",
      muscle: "",
      exercise: "",
      exercise_sets: "",
      reps: "",
      weight_amount: "",
      summary: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.addWorkout();
  };
  static contextType = WorkoutsContext;
  addWorkout = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    fetch(`${config.API_ENDPOINT}`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.context.addWorkout(data);
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  };
  render() {
    return (
      <div>
        <Link to="/exercises">
          <button className="Exercise_form_btn">Demo page</button>
        </Link>
        <form className="Exercise_form" onSubmit={this.handleSubmit}>
          <div className="Exercise_title">
            <h2>Keep track of workouts!</h2>
          </div>
          <div className="Exercise_date">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="summary">Summary of workout</label>
            <textarea
              className="Exercise_summary"
              type="text"
              name="summary"
              id="summary"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="Exercise_workout">
            <div className="workout_unit">
              <label htmlFor="muscle">Muscle</label>
              <input
                type="text"
                name="muscle"
                className="muscle_group"
                onChange={this.handleChange}
              />
            </div>
            <div className="workout_unit">
              <label htmlFor="exercise">Exercise</label>
              <input
                type="text"
                name="exercise"
                className="exercise"
                onChange={this.handleChange}
              />
            </div>
            <div className="workout_unit">
              <label htmlFor="exercise_sets">Sets</label>
              <input
                type="text"
                name="exercise_sets"
                className="exercise_sets"
                onChange={this.handleChange}
              />
            </div>
            <div className="workout_unit">
              <label htmlFor="reps">Reps</label>
              <input
                type="text"
                name="reps"
                className="reps"
                onChange={this.handleChange}
              />
            </div>
            <div className="workout_unit">
              <label htmlFor="weight_amount">Weight</label>
              <input
                type="text"
                name="weight_amount"
                className="weight_amount"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form_buttons">
            <button
              onClick={this.handlePost}
              type="submit"
              className="Exercise_button"
              name="post"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// date: "",
// muscle: "",
// exercise: "",
// exercise_sets: "",
// reps: "",
// weight_amount: "",
// summary: ""
