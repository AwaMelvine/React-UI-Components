import React from "react";
import "./Display.css";

const CalculatorDispplay = ({ value = 0 }) => (
  <div className="calculator-display">
    <p>{value}</p>
  </div>
);

export default CalculatorDispplay;
