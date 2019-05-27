import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardSummary from "./CardSummary";

const CardContent = () => (
  <div className="card-content">
    <div className="banner-wrapper">
      <CardBanner />
      <CardSummary />
    </div>
  </div>
);

export default CardContent;
