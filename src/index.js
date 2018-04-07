import * as PIXI from 'pixi.js'

import {state} from './engine/state'
import * as performance from './performances/2'

let width
let height
let updateDimensions = () => {
  width = window.innerWidth - 5
  height = window.innerHeight - 5
}
updateDimensions()
setTimeout(function(){
  updateDimensions()
}, 100)



var app = new PIXI.Application(width, height, {backgroundColor : state.bg, forceFXAA: true, forceCanvas: false, powerPreference: 'high-performance'});
state.app = app

document.getElementById('pixiContainer').appendChild(app.view);

performance.goToCompo(1)
performance.initKeysTracking()


state.app.renderer.resize(width, height);
window.addEventListener("resize", () => {
  updateDimensions()
  state.app.renderer.resize(width, height)
})


// SMOOTH RELOAD
let canvas = document.getElementById('pixiContainer')
let canvas2 = document.getElementById('pixiContainer2')
// let appV = document.getElementById('app')
canvas.style.opacity = 0
canvas2.style.opacity = 0
setTimeout(() => {
  canvas.style.opacity = 1
  canvas2.style.opacity = 1
}, 1000)

document.onkeypress = function (e) {
  console.log(e)
    // e = e || window.event;
    // if(e.keyCode === 5) {
    //     window.location.href = state.baseurl
    // }
    if (e.key === 'e') {
      canvas.style.opacity = 0
      setTimeout(() => {
        window.location.href = state.baseurl
      }, 1000)
    }
};



if (module.hot) {
  module.hot.accept(() => {
  });

  module.hot.dispose(() => {
    window.location.reload();
  });
}
