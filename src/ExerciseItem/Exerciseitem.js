import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../config";
import PropTypes from "prop-types";
import WorkoutsContext from "../WorkoutsContext";
import "./Exerciseitem.css";

class Exerciseitem extends Component {
  static contextType = WorkoutsContext;
  render() {
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
              date <span>{this.props.date_created}</span>
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
