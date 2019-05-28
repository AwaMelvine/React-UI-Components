import React, { Component } from "react";
import "./App.css";
import CalculatorDispplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainers from "./components/ButtonContainers/ButtonsContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }
  handleClick = value => {
    const { total } = this.state;
    if (value === "clear") {
      this.setState({ ...this.state, total: 0 });
    } else {
      if (total === 0 && total.toString().length === 1) {
        this.setState({ ...this.state, total: value });
      } else {
        this.setState({ ...this.state, total: `${total}${value}` });
      }
    }
  };
  render() {
    const { total } = this.state;
    return (
      <div className="app">
        <CalculatorDispplay total={total} />
        <ButtonContainers handleClick={this.handleClick} />
      </div>
    );
  }
}
