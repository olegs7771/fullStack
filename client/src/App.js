import React, { Component } from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
