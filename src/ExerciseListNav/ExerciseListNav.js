import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WorkoutsContext from "../WorkoutsContext";

import "./ExerciseListNav.css";

// Sidebar weekdays used for sorting workouts performed
// on each individual day of the week.

export default class ExerciseListNav extends Component {
  static contextType = WorkoutsContext;
  render() {
    const { weekdays = [] } = this.context;

    return (
      <div className="ExerciseListNav">
        <ul className="ExerciseListNav__list">
          {weekdays.map(weekday => (
            <li key={weekday.id}>
              <NavLink
                className="ExerciseListNav__weekday-link"
                to={`/weekdays/${weekday.id}`}
              >
                {weekday.weekday_name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
