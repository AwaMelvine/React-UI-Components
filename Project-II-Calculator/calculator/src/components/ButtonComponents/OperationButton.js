import React from "react";
import "./Button.css";

const OperationButton = ({ label, customClassName }) => (
  <button className={`operation-button`}>{label}</button>
);

export default OperationButton;