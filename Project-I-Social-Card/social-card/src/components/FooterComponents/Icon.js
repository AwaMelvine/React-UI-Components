import React from "react";
import "./Footer.css";

const Icon = ({ name, label = "" }) => (
  <i className={name}>&nbsp;&nbsp;{label}</i>
);

export default Icon;
