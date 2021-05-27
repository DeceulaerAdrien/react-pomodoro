import React, { Component } from "react";

class Pomodoro extends Component {
  constructor() {
    super();

    this.state = {
      Min: 25,
      Sec: 0,
      isStart: false,
    };

    this.decreasOneMin = this.decreasOneMin.bind(this);
    this.increaseOneMin = this.increaseOneMin.bind(this);
    this.decreasOneSec = this.decreasOneSec.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reset = this.reset.bind(this);
    this.decreaseTimerMin = this.decreaseTimerMin.bind(this);
  }

  increaseOneMin() {
    this.state.Min >= 59
      ? this.setState({ Min: 0 })
      : this.setState({ Min: this.state.Min + 1 });
  }

  decreasOneMin() {
    this.state.Min <= 0
      ? this.setState({ Min: 59 })
      : this.setState({ Min: this.state.Min - 1 });
  }
  decreaseTimerMin() {
    this.state.Min <= 0
      ? this.setState({ Min: 0 })
      : this.setState({ Min: this.state.Min - 1 });
    this.state.Sec <= 0 ? this.setState({ Sec: 59 }) : null;
  }
  decreasOneSec() {
    this.state.Sec <= 0
      ? this.decreaseTimerMin()
      : this.setState({ Sec: this.state.Sec - 1 });
    this.state.Sec === 0 && this.state.Min === 0 ? this.stopTimer() : null;
  }

  startTimer() {
    this.timer = setInterval(this.decreasOneSec, 1000);
    this.setState({ isStart: true });
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({ isStart: false });
  }

  reset() {
    this.stopTimer();
    this.setState({ Min: 25, Sec: 0 });
  }

  render() {
    return (
      <section className="timer">
        <h2>
          {this.state.Min === 0
            ? "00"
            : this.state.Min < 10
            ? "0" + this.state.Min
            : this.state.Min}
          :
          {this.state.Sec === 0
            ? "00"
            : this.state.Sec < 10
            ? "0" + this.state.Sec
            : this.state.Sec}
        </h2>
        <div className="buttons">
          <button onClick={this.increaseOneMin}>+</button>
          <button
            onClick={
              this.state.isStart === false ? this.startTimer : this.stopTimer
            }
          >
            {this.state.isStart === true ? "stop" : "start"}
          </button>
          <button onClick={this.reset}>reset</button>
          <button onClick={this.decreasOneMin}>-</button>
        </div>
      </section>
    );
  }
}

export default Pomodoro;
