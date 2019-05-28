import React from "react";
import "./ButtonContainers.css";
import OperationButton from "../ButtonComponents/OperationButton";
const operations = ["÷", "x", "-", "+", "="];

const OperationButtonsContainer = () => {
  return (
    <div className="operation-buttons-container">
      {operations.map(op => (
        <OperationButton label={op} />
      ))}
    </div>
  );
};
export default OperationButtonsContainer;
