import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../config";
import PropTypes from "prop-types";
import WorkoutsContext from "../WorkoutsContext";
import "./Exerciseitem.css";
import Moment from "moment";

// Individual exercises that are listed out on home page, are
// clickable to see full exercise log.

class Exerciseitem extends Component {
  static defaultProps = {
    onDeleteWorkout: () => {}
  };
  static contextType = WorkoutsContext;

  handleClickDelete = e => {
    e.preventDefault();
    const workoutId = this.props.id;

    fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.then(err => Promise.reject(err));
        }
        return res;
      })
      .then(() => {
        this.context.handleDelete(workoutId);
      })
      .catch(error => {
        console.error({ error });
      });
  };
  static contextType = WorkoutsContext;
  render() {
    Moment.locale("en");
    let date = this.props.date_created;
    return (
      <>
        <Link className="Workouts__link-box" to={`/workouts/${this.props.id}`}>
          <div className="Workout">
            <h2 className="Workout__title">
              <div className="Workout__muscle-title">{this.props.muscle}</div>
              <div className="Workout__dates">
                <div className="Workout__dates-modified">
                  Date: <span>{Moment(date).format("MMM Do YYYY")}</span>
                </div>
              </div>
            </h2>
            <button
              className="Workout__delete"
              type="button"
              onClick={this.handleClickDelete}
            >
              X
            </button>
          </div>
        </Link>
      </>
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
