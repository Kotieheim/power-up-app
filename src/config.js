export default {
  API_ENDPOINT:
    process.env.REACT_APP_API_ENDPOINT || "http://localhost:8080/api",
  API_KEY: process.env.REACT_APP_API_KEY,
  TOKEN_KEY: "client-auth-token"
};
// process.env.REACT_APP_API_ENDPOINT || "http://localhost:8080/api"
