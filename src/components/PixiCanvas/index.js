import React from "react";
import ReactDOM from "react-dom";

import * as PIXI from 'pixi.js'

import {state} from '../../engine/state'
import * as performance from '../../performances/1-first'


import './pixi.sass'

class PixiCanvas extends React.Component {

  componentDidMount() {

    var app = new PIXI.Application(400, 400, {backgroundColor : 0x1099bb});
    state.app = app
    this.refs.pixiContainer.appendChild(app.view);


    performance.goToCompo(1)
    performance.initKeysTracking()


  }

  render() {
    return (
      <div className="c-pixi">
        hello from pixifdsafds fsdafdsfd dsadasads
        <div ref="pixiContainer" className="pixi-container"></div>
      </div>
    )
  }
}

export default PixiCanvas
