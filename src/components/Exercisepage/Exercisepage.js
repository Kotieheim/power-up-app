import React, { Component } from "react";
import "./Exercisepage.css";
import Postworkout from "../Postworkout/Postworkout";
import Musclegroup from "../Musclegroup/Musclegroup";

export class Exercisepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [{ muscle: "", exercise: "", sets: "", reps: "", weight: "" }]
    };
  }
  render() {
    return (
      <div>
        <div className="Exercise_form">
          <Musclegroup workouts={this.state} />
        </div>
        <Postworkout />
      </div>
    );
  }
}

export default Exercisepage;
