import React from "react";
import ReactDOM from "react-dom";
import ExerciseList from "./ExerciseList";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    }
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ExerciseList {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
