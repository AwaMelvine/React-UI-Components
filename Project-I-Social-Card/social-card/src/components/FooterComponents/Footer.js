import React from "react";
import "./Footer.css";
import Icon from "./Icon";

const Footer = () => (
  <div className="footer">
    <div className="footer-wrapper">
      <Icon name="far fa-comment" />
      <Icon name="fas fa-sync" label={6} />
      <Icon name="far fa-heart" label={4} />
      <Icon name="far fa-envelope" />
    </div>
  </div>
);

export default Footer;
