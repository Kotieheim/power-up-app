import React, { Component } from "react";
import "./Musclegroup.css";

export class Musclegroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [{ muscle: "", exercise: "", sets: "", reps: "", weight: "" }]
    };
  }

  handleChange = e => {
    if (
      ["muscle", "exercise", "sets", "reps", "weight"].includes(
        e.target.className
      )
    ) {
      let workouts = [...this.state.workouts];
      workouts[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ workouts }, () => console.log(this.state.workouts));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };
  addExercise = e => {
    this.setState(prevState => ({
      workouts: [
        ...prevState.workouts,
        { muscle: "", exercise: "", sets: "", reps: "", weight: "" }
      ],
      date: "",
      summary: ""
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    let { workouts } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="Exercise_title">
            <h2>Keep track of workouts!</h2>
          </div>
          <div className="Exercise_date">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date"></input>
          </div>
          <div className="Exercise_summary">
            <label htmlFor="summary">Summary of workout</label>
            <textarea type="text" name="summary" id="summary"></textarea>
          </div>
          {workouts.map((val, idx) => {
            console.log(val, idx);
            let muscleId = `muscle-${idx}`,
              exerciseId = `exercise-${idx}`,
              setsId = `sets-${idx}`,
              repsId = `reps-${idx}`,
              weightId = `weight-${idx}`;
            return (
              <div className="Exercise_workout" key={idx}>
                <div className="workout_unit">
                  <label htmlFor={muscleId}>Muscle</label>
                  <input
                    type="text"
                    name={muscleId}
                    data-id={idx}
                    id={muscleId}
                    className="muscle_group"
                    value={this.state.muscle}
                    onChange={this.handlePost}
                  />
                </div>
                <div className="workout_unit">
                  <label htmlFor={exerciseId}>Exercise</label>
                  <input
                    type="text"
                    name={exerciseId}
                    data-id={idx}
                    id={exerciseId}
                    className="exercise"
                  />
                </div>
                <div className="workout_unit">
                  <label htmlFor={setsId}>Sets</label>
                  <input
                    type="text"
                    name={setsId}
                    data-id={idx}
                    id={setsId}
                    className="sets"
                  />
                </div>
                <div className="workout_unit">
                  <label htmlFor={repsId}>Reps</label>
                  <input
                    type="text"
                    name={repsId}
                    data-id={idx}
                    id={repsId}
                    className="reps"
                  />
                </div>
                <div className="workout_unit">
                  <label htmlFor={weightId}>Weight</label>
                  <input
                    type="text"
                    name={weightId}
                    data-id={idx}
                    id={weightId}
                    className="weight"
                  />
                </div>
              </div>
            );
          })}
          <button onClick={this.addExercise} className="add_exercise">
            + Add Exercise
          </button>
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

export default Musclegroup;
