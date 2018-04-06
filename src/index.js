import * as PIXI from 'pixi.js'

import {state} from './engine/state'
import * as performance from './performances/1'

var app = new PIXI.Application(400, 400, {backgroundColor : state.bg, forceFXAA: true, forceCanvas: false});
state.app = app

document.getElementById('pixiContainer').appendChild(app.view);
console.log(document.getElementById('pixiContainer'))

performance.goToCompo(1)
performance.initKeysTracking()

state.app.renderer.resize(window.innerWidth, window.innerHeight);
window.addEventListener("resize", () => {state.app.renderer.resize(window.innerWidth, window.innerHeight)})


if (module.hot) {
  module.hot.accept(() => {
    console.log(1)
  });

  module.hot.dispose(() => {
    console.log(2)
    window.location.reload();
  });
}
