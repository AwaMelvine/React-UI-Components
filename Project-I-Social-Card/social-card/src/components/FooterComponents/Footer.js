import React, { Component } from "react";
import "./Footer.css";
import Icon from "./Icon";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showing: false
    };
  }

  handleIconClick = message => {
    this.setState({
      message,
      showing: true
    });

    setTimeout(() => {
      this.setState({ showing: false });
    }, 3000);
  };

  render() {
    const { showing, message } = this.state;
    return (
      <div className="footer">
        <div className="footer-wrapper">
          <Icon
            onClick={() => this.handleIconClick("Comments are welcome")}
            name="far fa-comment"
          />
          <Icon
            onClick={() => this.handleIconClick("Thanks for RTing")}
            name="fas fa-sync"
            label={6}
          />
          <Icon
            onClick={() => this.handleIconClick("Thanks for liking")}
            name="far fa-heart"
            label={4}
          />
          <Icon
            onClick={() => this.handleIconClick("Thanks for reaching out")}
            name="far fa-envelope"
          />
        </div>
        {showing && <div className="message">{message}</div>}
      </div>
    );
  }
}

export default Footer;
