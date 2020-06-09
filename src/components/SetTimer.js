import React from "react";

class SetTimer extends React.Component {
  render() {
    return (
      <div className="setTimer">
        <div id={`${this.props.type}-label`}>
          {this.props.type === "session" ? "Session " : "Break "}Length
        </div>
        <div className="setTimer-controls">
          <button
            id={`${this.props.type}-decrement`}
            onClick={() =>
              this.props.handleClick(false, `${this.props.type}Value`)
            }
          >
            &darr;
          </button>
          <div id={`${this.props.type}-length`}>{this.props.value}</div>
          <button
            id={`${this.props.type}-increment`}
            onClick={() =>
              this.props.handleClick(true, `${this.props.type}Value`)
            }
          >
            &uarr;
          </button>
        </div>
      </div>
    );
  }
}

export default SetTimer;
