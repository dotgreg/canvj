import React from "react";
import ReactDOM from "react-dom";

import {fabric} from 'fabric'

import {e} from '../../engine'
import * as a1 from '../../visuals/simple1'
import * as a2 from '../../visuals/simple2'
import * as i1 from '../../visuals/image1'

import Video1 from '../../visuals/video1'

import './canvas.sass'

class Canvas extends React.Component {

  componentDidMount() {
    console.log('CANVAS componentDidMount')

    e.canvas = new fabric.Canvas(this.refs.canvas)
    e.canvas.setDimensions({width: 600, height: 400})

    a1.start()
    a2.start()
    i1.start()
    this.refs.video1.start()
  }

  render() {
    return (
      <div className="c-canvas">
        hello
        <canvas ref="canvas"></canvas>
        <Video1 ref="video1" />
      </div>
    )
  }
}

export default Canvas
