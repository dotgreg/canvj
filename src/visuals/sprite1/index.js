import * as PIXI from 'pixi.js'
import {state} from '../../engine/state'
import {center} from '../../engine/placement'
import {cloneDeep, each} from 'lodash'

import sprites from './synth/*'

let mc = {}

export let start = () => {

  let gifImages = []
  let baseurl = 'http://localhost:1234'
  each(sprites, (i => gifImages.push(baseurl + i)))
  let textureArray = [];

  for (let i=0; i < gifImages.length; i++)
  {
    let texture = PIXI.Texture.fromImage(gifImages[i]);
    textureArray.push(texture);
  };

  mc = new PIXI.extras.AnimatedSprite(textureArray);

  mc.width = 300
  mc.height = 300

  mc.anchor.set(0.5)

  center(mc)

  state.app.stage.addChild(mc);

  mc.play()

  mc.animationSpeed = 0.2

  let cmf = new PIXI.filters.ColorMatrixFilter()
  mc.filters = [cmf];

  // mc.filters = [new PIXI.filters.ColorMatrixFilter()];
  // mc.blendMode = PIXI.BLEND_MODES.SCREEN

  state.app.ticker.add(() => {
    if (!mc || !mc.position) return false
    cmf.hue(Math.abs(Math.cos(x)) * 100, false)
    // console.log(window.innerWidth, window.innerHeight)
    let x = state.currentTime() * 2
    let x2 = state.currentTime()  * 15

    // mc.height = 10
    mc.rotation = Math.cos(x) / 30
    mc.scale.set(0.7 + Math.cos(x2) / 30, 0.7 + Math.sin(x2) / 30)
    mc.position.x = 110 + (window.innerWidth / 2) - (mc.width / 2) + (100 * ( Math.cos(x)))
    // mc.position.x = (window.innerWidth / 2) - ((mc.width / 2) * 3) + (200 * ( Math.exp(Math.cos(x))))
    mc.position.y = 110 + (window.innerHeight / 2) - (mc.height / 2) + (100 * ( Math.sin(x)))
    // console.log((20 * ( Math.sin(x))))
    // mc.position.x += 20 * ( Math.sin(4*x)/x)
  })
}

export let stop = () => {
  mc.destroy()
  mc = {}
}
