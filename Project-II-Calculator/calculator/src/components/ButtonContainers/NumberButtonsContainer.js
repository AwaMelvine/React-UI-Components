import React from "react";
import "./ButtonContainers.css";
import ActionButton from "./../ButtonComponents/ActionButton";
import NumberButton from "../ButtonComponents/NumberButton";
const data = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  zero: 0,
  clear: "clear"
};
const NumberButtonsContainer = () => (
  <div className="number-buttons-container">
    <ActionButton customClassName="clear" label={data.clear} />
    {data.numbers.map(number => (
      <NumberButton key={number} label={number} />
    ))}
    <ActionButton customClassName="zero" label={data.zero} />
  </div>
);

export default NumberButtonsContainer;
