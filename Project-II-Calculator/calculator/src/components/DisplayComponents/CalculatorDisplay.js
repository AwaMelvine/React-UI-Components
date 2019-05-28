import React from "react";
import "./Display.css";

const CalculatorDispplay = ({ value = 0 }) => (
  <div className="calculator-display">
    <input name="displayValue" value={value} />
  </div>
);

export default CalculatorDispplay;
