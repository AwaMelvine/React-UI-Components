import React from "react";
import "./Footer.css";

const Icon = ({ name, label = "", onClick }) => (
  <i onClick={onClick} className={name}>
    &nbsp;&nbsp;{label}
  </i>
);

export default Icon;
