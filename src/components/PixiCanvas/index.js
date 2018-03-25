import React from "react";
import ReactDOM from "react-dom";

import * as PIXI from 'pixi.js'

import {state} from '../../engine/state'
import * as performance from '../../performances/1-first'


import './pixi.sass'

class PixiCanvas extends React.Component {

  componentDidMount() {

    // var app = new PIXI.Application(400, 400, {backgroundColor : 0xeeeaaa});
    // var app = new PIXI.Application(400, 400, {backgroundColor : 0x0ff3322});
    var app = new PIXI.Application(400, 400, {backgroundColor : state.bg, forceFXAA: true, forceCanvas: false});
    state.app = app
    this.refs.pixiContainer.appendChild(app.view);


    performance.goToCompo(1)
    performance.initKeysTracking()

    this.resizeContainer()
    window.addEventListener("resize", this.resizeContainer)
  }

  componenentWillUnmount() {
    window.removeEventListener("resize", this.resizeContainer)
  }

  resizeContainer() {
    state.app.renderer.resize(window.innerWidth, window.innerHeight);
  }

  render() {
    return (
      <div className="c-pixi">
        <div ref="pixiContainer" className="pixi-container"></div>
      </div>
    )
  }
}

export default PixiCanvas
