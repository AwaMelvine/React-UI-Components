import React from "react";
import "./ButtonContainers.css";
import NumberButtonsContainer from "./NumberButtonsContainer";
import OperationButtonsContainer from "./OperationButtonsContainer";

const ButtonContainers = () => {
  return (
    <div className="buttons-container">
      <NumberButtonsContainer />
      <OperationButtonsContainer />
    </div>
  );
};
export default ButtonContainers;
