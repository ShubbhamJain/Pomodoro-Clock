import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <div className="timer">
        <h2 id="timer-label">
          {this.props.mode === "session" ? "Session" : "Break"}
        </h2>
        <h2 id="time-left">{this.props.time}</h2>
      </div>
    );
  }
}

export default Timer;
