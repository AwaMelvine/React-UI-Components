import React from "react";
import "./Button.css";

const NumberButton = ({ label, customClassName = "", handleClick }) => (
  <button
    className={`number-button ${customClassName}`}
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

export default NumberButton;
