import React, { Component } from "react";
import "./App.css";
import Testing from "./components/Testing";

class App extends Component {
  state = {
    data: {
      test: "test"
    }
  };
  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Testing data={data} />
      </div>
    );
  }
}

export default App;
