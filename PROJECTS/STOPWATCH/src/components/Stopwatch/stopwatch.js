import { Component } from "react";

import "./stopwatch.css";

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedSec: 0,
  };

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval);
    this.setState({ isTimerRunning: false, timeElapsedSec: 0 });
  };

  onStopTimer = () => {
    clearInterval(this.timeInterval);
    this.setState({ isTimerRunning: false });
  };

  updateTime = () => {
    this.setState((prevState) => ({
      timeElapsedSec: prevState.timeElapsedSec + 1,
    }));
  };

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000);
    this.setState({ isTimerRunning: true });
  };

  renderSeconds = () => {
    const { timeElapsedSec } = this.state;
    const seconds = Math.floor(timeElapsedSec % 60);

    if (seconds < 10) {
      return `0${seconds}`;
    }
    return seconds;
  };

  renderMinutes = () => {
    const { timeElapsedSec } = this.state;
    const minutes = Math.floor(timeElapsedSec / 60);

    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  };

  render() {
    const { isTimerRunning } = this.state;
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`;

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="title">Stopwatch</h1>
          <div className="stopwatch-con">
            <h1 className="stopwatch-time">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
