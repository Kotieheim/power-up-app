import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../config";
import PropTypes from "prop-types";
import WorkoutsContext from "../WorkoutsContext";
import "./Exerciseitem.css";

class Exerciseitem extends Component {
  static defaultProps = {
    onDeleteWorkout: () => {}
  };
  static contextType = WorkoutsContext;

  handleClickDelete = e => {
    e.preventDefault();
    const workoutId = this.props.id;
    console.log(workoutId);

    fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        console.log(res.json(), workoutId);
        if (!res.ok) {
          return res.json().then(err => Promise.reject(err));
        }
        return res.json();
      })
      .then(() => {
        this.context.handleDelete(workoutId);
        // this.props.onDeleteWorkout(workoutId);
      })
      .catch(error => {
        console.error({ error });
      });
  };
  static contextType = WorkoutsContext;
  render() {
    let date = new Date().toLocaleDateString("en-Us", this.props.date_created);
    return (
      <div className="Workout">
        <h2 className="Workout__title">
          <Link to={`/workouts/${this.props.id}`}>{this.props.muscle}</Link>
          <button
            className="Workout__delete"
            type="button"
            onClick={this.handleClickDelete}
          >
            remove
          </button>
          <div className="Workout__dates">
            <div className="Workout__dates-modified">
              Date: <span>{date}</span>
            </div>
          </div>
        </h2>
      </div>
    );
  }
}

export default withRouter(Exerciseitem);

Exerciseitem.propTypes = {
  id: PropTypes.string,
  muscle: PropTypes.string,
  exercise: PropTypes.string,
  exercise_sets: PropTypes.string,
  reps: PropTypes.string,
  weight_amount: PropTypes.string,
  date_created: PropTypes.string,
  summary: PropTypes.string
};
