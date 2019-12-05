import React, { Component } from "react";
import "./Postworkout.css";

export class Postworkout extends Component {
  render() {
    return (
      <div className="Postworkout_post">
        <div className="Postworkout_title">
          <h2>Exercises:</h2>
          <p className="Postworkout_date">11/17/19</p>
        </div>
        <div className="Individual_workout">
          <p className="Individual_summary">
            Sample of workout summary here. Stating weather it went well or what
            you could improve on. Will be made optional to fill out or not.
          </p>
          <ul className="Exercise_list">
            <li>Chest</li>
            <li>Bench Press</li>
            <li>4 x 12</li>
            <li>225 lbs</li>
          </ul>
          <ul className="Exercise_list">
            <li>Back</li>
            <li>Deadlifts</li>
            <li>7 x 5</li>
            <li>505 lbs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Postworkout;
