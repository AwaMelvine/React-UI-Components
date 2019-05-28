import React from "react";
import "./Button.css";

const ActionButton = ({ label }) => (
  <React.Fragment>
    <button className="action-button">{label}</button>
  </React.Fragment>
);

export default ActionButton;
