import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App/App";
// import { WorkoutsListProvider } from "./contexts/WorkoutsListContext";
// import { WorkoutsProvider } from "./contexts/WorkoutsContext";

ReactDOM.render(
  <BrowserRouter>
    {/* <WorkoutsListProvider>
      <WorkoutsProvider> */}
    <App />
    {/* </WorkoutsProvider>
    </WorkoutsListProvider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
