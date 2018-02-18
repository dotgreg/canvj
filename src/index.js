import React from "react";
import ReactDOM from "react-dom";

import Canvas from "./components/Canvas";

class App extends React.Component {
  render() {
    return (
      <div>
        <Canvas />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
