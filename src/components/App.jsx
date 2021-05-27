import React from "react";
import Pomodoro from "./Pomodoro";
import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pomodoro />
      </div>
    );
  }
}

export default App;
