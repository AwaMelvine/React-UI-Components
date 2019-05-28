import React from "react";
import "./Card.css";

const CardSummary = ({ title, summary, link, linkText }) => (
  <div className="card-summary">
    <h3>{title}</h3>
    <p>{summary}</p>
    <a href={link}>{linkText}</a>
  </div>
);

export default CardSummary;
