import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardSummary from "./CardSummary";

const CardContent = () => (
  <div className="card-content">
    <CardBanner />
    <CardSummary />
  </div>
);

export default CardContent;
