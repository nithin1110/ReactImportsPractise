import React from "react";
import ReactDOM from "react-dom";
import { add, sub, mul, div } from "./Calculator.js";

ReactDOM.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{sub(10, 5)}</li>
      <li>{mul(2, 3)}</li>
      <li>{div(20, 5)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
