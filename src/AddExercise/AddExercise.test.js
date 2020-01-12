import React from "react";
import ReactDOM from "react-dom";
import AddExercise from "./AddExercise";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AddExercise />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
