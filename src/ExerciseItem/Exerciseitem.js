import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import config from "../config";
import WorkoutsContext from "../contexts/WorkoutsContext";
import "./Exerciseitem.css";

function deleteWorkoutRequest(workoutId, cb) {
  fetch(config.API_ENDPOINT + `/${workoutId}`, {
    method: "DELETE",
    headers: {
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
      cb(workoutId);
    })
    .catch(error => {
      console.error(error);
    });
}
export default function Exerciseitem(props) {
  return (
    <WorkoutsContext.Consumer>
      {context => (
        <div className="Postworkout_post">
          <div className="Postworkout_title">
            <h2>Exercises:</h2>
            <p className="Postworkout_date">11/17/19</p>
          </div>
          <div className="Individual_workout">
            <p className="Individual_summary">{props.summary}</p>
            <ul className="Exercise_list">
              <li>{props.muscle}</li>
              <li>{props.exercise}</li>
              <li>
                {props.exercise_sets} x {props.reps}
              </li>
              <li>{props.weight_amount} lbs</li>
            </ul>
          </div>
        </div>
      )}
    </WorkoutsContext.Consumer>
  );
}

Exerciseitem.defaultProps = {
  onClickDelete: () => {}
};

Exerciseitem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  muscle: PropTypes.string.isRequired,
  exercise: PropTypes.string.isRequired,
  exercise_sets: PropTypes.string.isRequired,
  reps: PropTypes.string.isRequired,
  weight_amount: PropTypes.string.isRequired,
  summary: PropTypes.string
};

// date_created: "2019-12-03T16:04:27.247Z"
// exercise: "Bench Press"
// exercise_sets: "3"
// id: 1
// muscle: "Chest"
// reps: "12"
// summary: "Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid."
// weight_amount: "105"
