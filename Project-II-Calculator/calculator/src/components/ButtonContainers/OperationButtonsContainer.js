import React from "react";
import "./ButtonContainers.css";
import NumberButton from "../ButtonComponents/NumberButton";
const operations = ["÷", "x", "-", "+", "="];

const OperationButtonsContainer = () => {
  return (
    <div className="operation-buttons-container">
      {operations.map(op => (
        <NumberButton label={op} />
      ))}
    </div>
  );
};
export default OperationButtonsContainer;
