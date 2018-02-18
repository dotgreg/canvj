import React from "react";
import ReactDOM from "react-dom";

// import Canvas from "./components/Canvas";
import PixiCanvas from "./components/Pixi";

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
