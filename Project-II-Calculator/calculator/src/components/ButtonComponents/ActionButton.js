import React from "react";
import "./Button.css";

const ActionButton = ({ label, customClassName = "", handleClick }) => (
  <button
    className={`action-button ${customClassName}`}
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

export default ActionButton;
