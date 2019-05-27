import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardSummary from "./CardSummary";

const CardContent = ({ cardSrc, cardAlt, title, summary, link, linkText }) => (
  <div className="card-content">
    <div className="banner-wrapper">
      <CardBanner cardSrc={cardSrc} cardAlt={cardAlt} />
      <CardSummary
        title={title}
        summary={summary}
        link={link}
        linkText={linkText}
      />
    </div>
  </div>
);

export default CardContent;
