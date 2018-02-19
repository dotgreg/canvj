import React from "react";
import ReactDOM from "react-dom";

import {fabric} from 'fabric'
import {e} from '../engine'

class Video1 extends React.Component {

  componentDidMount() {

  }

  start() {
    console.log('video1 started', e.canvas)
    var video1El = this.refs.video1;
    var video1 = new fabric.Image(video1El, {
      name: 'video1EL',
      left: 10,
      top: 10,
    });
    video1.getElement().play();
    e.canvas.add(video1)

    let loop = () => {
      // console.log('lol')
      e.canvas.renderAll()
      fabric.util.requestAnimFrame(loop)
    }
    fabric.util.requestAnimFrame(loop)
  }

  render() {
    return (
      <div className="c-video1">
        <video ref="video1" controls="controls" loop="loop" style={{display: 'block'}}>
          <source src="https://www.quirksmode.org/html5/videos/big_buck_bunny.ogv" type="video/ogv" />
          <source src="https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default Video1
