import React, { Component } from "react";

const WorkoutsListContext = React.createContext({
  workoutsList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setWorkoutsList: () => {}
});
export default WorkoutsListContext;

export class WorkoutsListProvider extends Component {
  state = {
    workoutsList: [],
    error: null
  };

  setWorkoutsList = workoutsList => {
    this.setState({ workoutsList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      workoutsList: this.state.workoutsList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setWorkoutsList: this.setWorkoutsList
    };
    return (
      <WorkoutsListContext.Provider value={value}>
        {this.props.children}
      </WorkoutsListContext.Provider>
    );
  }
}
