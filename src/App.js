import React from "react";
// import ReactDOM from "react-dom";
import Dogs from "./Dogs";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogUrl: "",
      breed: ""
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Random Doggo!</h1>
        <Dogs />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
