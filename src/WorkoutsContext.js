import React from "react";

const WorkoutsContext = React.createContext({
  isLoggedIn: false,
  user: {},
  workouts: [],
  weekdays: [],
  error: null,
  handleAddWorkout: () => {},
  handleDelete: () => {},
  handleLogin: () => {}
});

export default WorkoutsContext;
