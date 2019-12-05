import React, { Component } from "react";
import "./Exercisepage.css";
import PropTypes from "prop-types";
import Postworkout from "../Postworkout/Postworkout";
import Musclegroup from "../Musclegroup/Musclegroup";
import Exerciseitem from "../ExerciseItem/Exerciseitem";
import WorkoutsContext from "../contexts/WorkoutsContext";

export class Exercisepage extends Component {
  static propTypes = {
    workouts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
      })
    )
  };
  static defaultProps = {
    workouts: []
  };
  static contextType = WorkoutsContext;
  render() {
    const { workouts } = this.context;
    console.log(workouts);
    return (
      <div>
        <div className="Exercise_form">
          <Musclegroup workouts={this.state} />
        </div>
        {workouts.map(workout => (
          <Exerciseitem key={workout.id} {...workout} />
        ))}
        {/* <Postworkout /> */}
      </div>
    );
  }
}

export default Exercisepage;
