import React from "react";
import "./ButtonContainers.css";
import ActionButton from "./../ButtonComponents/ActionButton";
import NumberButton from "../ButtonComponents/NumberButton";
const data = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
