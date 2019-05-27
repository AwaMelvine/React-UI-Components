import React from "react";
import "./Card.css";
import CardContent from "./CardContent";
const data = {
  src:
    "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
  alt: "React JS Banner",
  summary: {
    title: "Get started with React",
    summaryText: `React makes it painless to create interactive UIs. Design simple views for
    each state in your application.`,
    link: "https://www.reactjs.org",
    linkText: "reactjs.org"
  }
};

class CardContainer {
  handleClick = () => {
    window.location.href = "https://reactjs.org";
  };
  render() {
    return (
      <div className="card-container" onClick={() => this.handleClick()}>
        <CardContent
          cardSrc={data.src}
          cardAlt={data.alt}
          title={data.summary.title}
          summary={data.summary.summaryText}
          link={data.summary.link}
          linkText={data.summary.linkText}
        />
      </div>
    );
  }
}

export default CardContainer;
