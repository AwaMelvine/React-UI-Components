import React from "react";
import "./ButtonContainers.css";
import ActionButton from "./../ButtonComponents/ActionButton";
import NumberButton from "../ButtonComponents/NumberButton";
const data = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  zero: 0,
  cancel: "cancel"
};
const NumberButtonsContainer = () => (
  <div className="number-buttons-container">
    <ActionButton label={data.zero} />
    {data.numbers.map(number => (
      <NumberButton label={number} />
    ))}
    <ActionButton label={data.zero} />
  </div>
);

export default NumberButtonsContainer;
