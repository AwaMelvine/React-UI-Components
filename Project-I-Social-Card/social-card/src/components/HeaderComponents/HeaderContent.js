import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";

const HeaderContent = ({ title, handle, date, description }) => (
  <div className="header-content">
    <HeaderTitle title={title} handle={handle} date={date} />
    <p>{description}</p>
  </div>
);

export default HeaderContent;
