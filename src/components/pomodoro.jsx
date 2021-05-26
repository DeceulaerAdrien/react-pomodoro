import React, { Component } from "react";

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = {
      Min: 25,
      Sec: "00",
    };
  }

  addOneMin() {
    this.setState({ count: this.state.count + 1 });
  }

  removeOneMin() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.Min} : {this.state.Sec}
        </h2>
        <button onClick={this.addOneMin.bind(this)}>+</button>
        <button onClick={""}>Start</button>
        <button onClick={""}>Reset</button>
        <button onClick={this.removeOneMin.bind(this)}>-</button>
      </div>
    );
  }
}

export default Pomodoro;
