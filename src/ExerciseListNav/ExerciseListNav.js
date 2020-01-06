import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WorkoutsContext from "../WorkoutsContext";

import "./ExerciseListNav.css";

export default class ExerciseListNav extends Component {
  static contextType = WorkoutsContext;
  render() {
    const { weekdays = [] } = this.context;
    console.log(weekdays);

    return (
      <div className="ExerciseListNav">
        <ul className="ExerciseListNav__list">
          {weekdays.map(weekday => (
            <li key={weekday.id}>
              <NavLink
                className="ExerciseListNav__weekday-link"
                to={`/weekdays/${weekday.id}`}
              >
                {weekday.weekday_name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// import React from "react";
// import WorkoutsContext from "../WorkoutsContext";
// import { NavLink } from "react-router-dom";

// export default function ExerciseListNav() {
//   return (
//     <WorkoutsContext.Consumer>
//       {({ workouts, weekdays }) => (
//         <div className="ExerciseListNav">
//           <ul className="ExerciseListNav__list">
//             {weekdays.map(weekday => (
//               <li key={weekday.name}>
//                 <NavLink
//                   key={weekday.id}
//                   className="ExerciseListNav__weekday-link"
//                   to={`/weekdays/${weekday.id}`}
//                 >
//                   {weekday.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </WorkoutsContext.Consumer>
//   );
// }
