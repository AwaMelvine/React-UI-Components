import React from "react";
import "./ButtonContainers.css";
import NumberButtonsContainer from "./NumberButtonsContainer";
import OperationButtonsContainer from "./OperationButtonsContainer";

const ButtonContainers = ({ handleClick }) => {
  return (
    <div className="buttons-container">
      <NumberButtonsContainer handleClick={handleClick} />
      <OperationButtonsContainer handleClick={handleClick} />
    </div>
  );
};
export default ButtonContainers;
