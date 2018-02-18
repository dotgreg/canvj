import React from "react";
import ReactDOM from "react-dom";

import Component1 from "./components/Component1";

class App extends React.Component {
  render() {
    return (
      <div>
        <Component1 />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
