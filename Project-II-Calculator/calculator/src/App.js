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
  render() {
    const { total } = this.state;
    return (
      <div className="app">
        <CalculatorDispplay total={total} />
        <ButtonContainers />
      </div>
    );
  }
}
