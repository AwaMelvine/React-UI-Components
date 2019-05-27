import React from "react";
// import moment from "moment";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";
var moment = require("moment");
const now = moment().format("D MMM");
const data = {
  thumbnail: {
    src:
      "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
    alt: "Lambda School Logo"
  },
  headerContent: {
    title: "Lambda School",
    handle: "@LambdaSchool",
    date: now,
    description: `Let's learn React by building simple interfaces with components. Don't try
    to overthink it, just keep it simple and have fun. Once you feel
    comfortable using components you are well on your way to mastering React!`
  }
};

const HeaderContainer = () => (
  <div className="header-container">
    <ImageThumbnail tSrc={data.thumbnail.src} tAlt={data.thumbnail.alt} />
    <HeaderContent
      title={data.headerContent.title}
      handle={data.headerContent.handle}
      date={data.headerContent.date}
      description={data.headerContent.description}
    />
  </div>
);
export default HeaderContainer;
