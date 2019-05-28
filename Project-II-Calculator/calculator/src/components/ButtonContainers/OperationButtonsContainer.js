import React from "react";
import "./ButtonContainers.css";
import OperationButton from "../ButtonComponents/OperationButton";
const operations = ["÷", "x", "-", "+", "="];

const OperationButtonsContainer = ({ handleClick }) => {
  return (
    <div className="operation-buttons-container">
      {operations.map(op => (
        <OperationButton label={op} handleClick={handleClick} />
      ))}
    </div>
  );
};
export default OperationButtonsContainer;
