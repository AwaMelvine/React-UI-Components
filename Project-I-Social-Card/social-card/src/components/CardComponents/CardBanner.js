import React from "react";
import "./Card.css";

const CardBanner = ({ cardSrc, cardAlt }) => (
  <div className="card-banner">
    <img src={cardSrc} alt={cardAlt} />
  </div>
);

export default CardBanner;
