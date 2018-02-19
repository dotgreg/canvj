import React from "react";
import ReactDOM from "react-dom";

import PixiCanvas from "./components/PixiCanvas";

import './style/reset.sass'

class App extends React.Component {
  render() {
    return (
      <div>
        <PixiCanvas />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
