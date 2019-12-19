import React from "react";

const WorkoutsContext = React.createContext({
  workouts: [],
  weekdays: [],
  error: null,
  handleAddWorkout: () => {},
  handleDelete: () => {}
});

export default WorkoutsContext;

// export class WorkoutsProvider extends Component {
//   state = {
//     workouts: []
//   };
//   setError = error => {
//     console.error(error);
//     this.setState({ error });
//   };
//   clearError = () => {
//     this.setState({ error: null });
//   };

//   setWorkouts = workouts => {
//     this.setState({ workouts });
//   };
//   clearWorkouts = () => {
//     this.setState();
//   };
//   addWorkouts = workout => {
//     this.setWorkouts([...this.state.workouts, workout]);
//   };

//   render() {
//     const value = {
//       workouts: this.state.workouts,
//       error: this.state.error,
//       setError: this.setError,
//       clearError: this.clearError,
//       setWorkouts: this.setWorkouts,
//       clearWorkouts: this.clearWorkouts,
//       addWorkouts: this.addWorkouts
//     };
//     return (
//       <WorkoutsContext.Provider value={value}>
//         {this.props.children}
//       </WorkoutsContext.Provider>
//     );
//   }
// }
