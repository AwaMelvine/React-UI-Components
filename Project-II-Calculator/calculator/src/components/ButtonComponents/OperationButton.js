import React from "react";
import "./Button.css";

const OperationButton = ({ label, handleClick }) => (
  <button className={`operation-button`} onClick={() => handleClick(label)}>
    {label}
  </button>
);

export default OperationButton;
