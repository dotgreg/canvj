import * as PIXI from 'pixi.js'
import {state} from '../../engine/state'

import {sprite} from '../../engine/sprite'
import {cloneDeep, each} from 'lodash'

import images from './images/*'

let mc = {}

export let start = () => {
  mc = sprite(images, 400)
  mc.animationSpeed = 0.1
  state.app.stage.addChild(mc);


  let cmf = new PIXI.filters.ColorMatrixFilter()
  let cmf2 = new PIXI.filters.ColorMatrixFilter()
  mc.filters = [cmf2, cmf];
  cmf2.contrast(10)
  // cmf2.negative()
  cmf.brightness(0.6)

  // cmf.hue(100, 10)
  // cmf.greyscale(0.2)
  // mc.blendMode = PIXI.BLEND_MODES.SCREEN

  state.app.ticker.add((deltaTime) => {
    if (mc.playing === false) return false

    // if (!mc || !mc.position) return false
    // console.log(window.innerWidth, window.innerHeight)
    // x = deltaTime * 100
    // console.log(deltaTime)
    // cmf.hue(Math.abs(Math.cos(x)) * 100, false)
    // console.log(Math.abs(Math.cos(x)) * 10)
    // mc.rotation = Math.cos(x) / 10
    // mc.scale.set(1 - Math.cos(x) / 10)
    // mc.animationSpeed = Math.cos(x)
    // if (mc && mc.position)
    // console.log(mc);
    // mc.position.x = (window.innerWidth / 2) - (mc.width / 2) + (100 * ( Math.cos(state.currentTime())))
    // mc.position.x = (window.innerWidth / 2) - ((mc.width / 2) * 3) + (200 * ( Math.exp(Math.cos(x))))
    // mc.position.y = (window.innerHeight / 2) - (mc.height / 2) + (200 * ( Math.sin(x)))
    // console.log((20 * ( Math.sin(x))))
    // mc.position.x += 20 * ( Math.sin(4*x)/x)
  })
}

export let stop = () => {
  mc.destroy()
}
