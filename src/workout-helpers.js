export const findWeekday = (weekdays = [], weekdayId) =>
  weekdays.find(weekday => weekday.id === weekdayId);

export const getWorkoutsForWeekdays = (workouts = [], weekdayId) =>
  !weekdayId
    ? workouts
    : workouts.filter(workout => workout.weekday === weekdayId);

export const countWorkoutsForWeekdays = (workouts = [], weekdayId) =>
  workouts.filter(workout => workout.weekday === weekdayId).length;

export const findWorkout = (workouts = [], workoutId) =>
  workouts.find(workout => workout.id === workoutId);
