import React from "react";
import "./Header.css";

const HeaderTitle = ({ title, handle, date }) => (
  <div className="header-title">
    <h3>{title}</h3>
    <span>{handle}</span>
    <span>.</span>
    <span>{date}</span>
  </div>
);

export default HeaderTitle;
