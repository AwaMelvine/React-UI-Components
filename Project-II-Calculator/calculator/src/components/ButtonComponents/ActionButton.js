import React from "react";
import "./Button.css";

const ActionButton = ({ label, customClassName = "" }) => (
  <button className={`action-button ${customClassName}`}>{label}</button>
);

export default ActionButton;
