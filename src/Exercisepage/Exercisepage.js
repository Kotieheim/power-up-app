import React, { Component } from "react";
import "./Exercisepage.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Exerciseform from "../Exerciseform/Exerciseform";
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
        <Link to="/exercise_form">
          <button className="Exercise_form_btn">Try it out!</button>
        </Link>
        <section>
          <h1 className="Demo_workouts">Demo Workouts</h1>
          <div className="Exercise_posts">
            {workouts.map(workout => (
              <Exerciseitem key={workout.id} {...workout} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Exercisepage;
