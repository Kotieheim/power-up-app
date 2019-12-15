import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import WorkoutsContext from "../WorkoutsContext";
import "./Exerciseitem.css";

class Exerciseitem extends Component {
  static defaultProps = {
    onDeleteNote: () => {}
  };
  static contextType = WorkoutsContext;

  handleClickDelete = e => {
    e.preventDefault();
    const workoutId = this.props.id;

    fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteWorkout(workoutId);
        this.props.onDeleteNote(workoutId);
      })
      .catch(error => {
        console.error({ error });
      });
  };
  render() {
    const {
      id,
      muscle,
      exercise,
      exercise_sets,
      reps,
      weight_amount,
      date_created,
      summary
    } = this.props;
    return (
      <div className="Workout">
        <h2 className="Workout__title">
          <Link to={`/workouts/${id}`}>{muscle}</Link>
          <button
            className="Workout__delete"
            type="button"
            onClick={this.handleClickDelete}
          >
            remove
          </button>
          <div className="Workout__dates">
            <div className="Workout__dates-modified">
              date <span>{date_created}</span>
            </div>
          </div>
        </h2>
      </div>
    );
  }
}

export default Exerciseitem;
