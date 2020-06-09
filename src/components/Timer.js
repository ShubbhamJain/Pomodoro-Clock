import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <div className="timer">
        <h1 id="timer-label">
          {this.props.mode === "session" ? "Session" : "Break"}
        </h1>
        <h1 id="time-left">{this.props.time}</h1>
      </div>
    );
  }
}

export default Timer;
