import React, { Component } from "react";
import "./Card.css";
import CardContent from "./CardContent";
const data = {
  summary: {
    title: "Get started with React",
    summaryText: `React makes it painless to create interactive UIs. Design simple views for
    each state in your application.`,
    link: "https://www.reactjs.org",
    linkText: "reactjs.org"
  }
};

class CardContainer extends Component {
  handleClick = () => {
    window.location.href = "https://reactjs.org";
  };
  render() {
    return (
      <div className="card-container" onClick={() => this.handleClick()}>
        <CardContent
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
