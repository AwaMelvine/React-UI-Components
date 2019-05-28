import React from "react";
import "./Button.css";

const NumberButton = ({ label, customClassName = "" }) => (
  <button className={`number-button ${customClassName}`}>{label}</button>
);

export default NumberButton;
