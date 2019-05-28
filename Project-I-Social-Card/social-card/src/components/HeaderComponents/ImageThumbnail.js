import React from "react";
import "./Header.css";

const ImageThumbnail = ({ tSrc, tAlt }) => (
  <div className="image-thumbnail">
    <img src={tSrc} alt={tAlt} />
  </div>
);
export default ImageThumbnail;
