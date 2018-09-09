import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bulma/css/bulma.css'

import Board from "./components/Board.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-demo">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
