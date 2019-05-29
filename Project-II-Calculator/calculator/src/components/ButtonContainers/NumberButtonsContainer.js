import React from "react";
import "./ButtonContainers.css";
import ActionButton from "./../ButtonComponents/ActionButton";
import NumberButton from "../ButtonComponents/NumberButton";
const data = {
  numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3],
  zero: 0,
  clear: "clear"
};
const NumberButtonsContainer = ({ handleClick }) => (
  <div className="number-buttons-container">
    <ActionButton
      customClassName="clear"
      label={data.clear}
      handleClick={handleClick}
    />
    {data.numbers.map(number => (
      <NumberButton key={number} label={number} handleClick={handleClick} />
    ))}
    <ActionButton
      customClassName="zero"
      label={data.zero}
      handleClick={handleClick}
    />
  </div>
);

export default NumberButtonsContainer;
