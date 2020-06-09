import React from "react";
import "./App.scss";
import SetTimer from "./components/SetTimer";
import Timer from "./components/Timer";

const Controls = ({ active, handlePlayPause, handleReset }) => (
  <div id="controls">
    <button id="start_stop" onClick={handlePlayPause}>
      {active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}
    </button>
    <button id="reset" onClick={handleReset}>
      &#8635;
    </button>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakValue: 5,
      sessionValue: 25,
      mode: "session",
      time: 25 * 60 * 1000,
      active: false,
      touched: false,
    };

    this.handleSetTimers = this.handleSetTimers.bind(this);

    this.handleReset = this.handleReset.bind(this);

    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time === 0 && prevState.mode === "session") {
      this.setState({
        time: this.state.breakValue * 60 * 1000,
        mode: "break",
      });
      this.audio.pause();
      this.audio.currentTime = 0;
      let promise = this.audio.play();
      if (promise !== undefined) promise.catch(function () {});
      this.audio.playbackRate = 2;
    }
    if (prevState.time === 0 && prevState.mode === "break") {
      this.setState({
        time: this.state.sessionValue * 60 * 1000,
        mode: "session",
      });
      this.audio.pause();
      this.audio.currentTime = 0;
      let promise = this.audio.play();
      if (promise !== undefined) promise.catch(function () {});
      this.audio.playbackRate = 2;
    }
  }

  handleSetTimers = (inc, type) => {
    if (this.state.active === true && (inc || !inc)) return;
    if (this.state[type] === 60 && inc) return;
    if (this.state[type] === 1 && !inc) return;
    let newValue = this.state[type] + (inc ? 1 : -1);
    if (type === "sessionValue") {
      this.setState({
        sessionValue: newValue,
        mode: "session",
        time: newValue * 60 * 1000,
      });
    }
    if (type === "breakValue") {
      this.setState({
        breakValue: newValue,
        mode: "break",
        time: newValue * 60 * 1000,
      });
    }
  };

  handlePlayPause = () => {
    if (this.state.active) {
      clearInterval(this.pomodoro);
      this.setState({
        active: false,
      });
    } else {
      if (this.state.touched) {
        this.pomodoro = setInterval(() => {
          this.setState({
            time: this.state.time - 1000,
          });
        }, 1000);
        this.setState({
          active: true,
        });
      } else {
        this.setState(
          {
            time: this.state.sessionValue * 60 * 1000,
            active: true,
            touched: true,
            mode: "session",
          },
          () =>
            (this.pomodoro = setInterval(() => {
              this.setState({
                time: this.state.time - 1000,
              });
            }, 1000))
        );
      }
    }
  };

  handleReset = () => {
    this.setState({
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      mode: "session",
      active: false,
      touched: false,
    });
    clearInterval(this.pomodoro);
    this.audio.currentTime = 0;
    this.audio.pause();
  };

  convertMilliseconds = (ms, p) => {
    let pattern = p;
    let arrayPattern = pattern.split(":");
    let clock = [];
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor(((ms % 360000) % 60000) / 1000);

    const createClock = (unit) => {
      if (pattern.match(unit)) {
        if (unit.match(/mm/)) {
          addUnitToClock(minutes, unit);
        }
        if (unit.match(/ss/)) {
          addUnitToClock(seconds, unit);
        }
      }
    };
    function addUnitToClock(val, unit) {
      if (val < 10 && unit.length === 2) {
        val = "0" + val;
      }
      clock.push(val);
    }
    for (var i = 0, j = arrayPattern.length; i < j; i++) {
      createClock(arrayPattern[i]);
    }
    return clock.join(":");
  };

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>

        <div id="settings">
          <SetTimer
            type="break"
            value={this.state.breakValue}
            handleClick={this.handleSetTimers}
          />
          <SetTimer
            type="session"
            value={this.state.sessionValue}
            handleClick={this.handleSetTimers}
          />
        </div>

        <Timer
          mode={this.state.mode}
          time={this.convertMilliseconds(this.state.time, "mm:ss")}
        />

        <Controls
          active={this.state.active}
          handlePlayPause={this.handlePlayPause}
          handleReset={this.handleReset}
        />

        <audio
          id="beep"
          type="audio/mp3"
          preload="none"
          src="https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3"
          ref={(av) => (this.audio = av)}
        ></audio>
      </div>
    );
  }
}

export default App;
