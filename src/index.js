import * as PIXI from 'pixi.js'

import {state} from './engine/state'
import * as performance from './performances/1'

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


if (module.hot) {
  module.hot.accept(() => {
  });

  module.hot.dispose(() => {
    window.location.reload();
  });
}
