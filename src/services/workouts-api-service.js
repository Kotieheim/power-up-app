import config from "../config";

const WorkoutsApiService = {
  getWorkouts() {
    return fetch(`${config.API_ENDPOINT}/workouts`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default WorkoutsApiService;
