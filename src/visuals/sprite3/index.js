import * as PIXI from 'pixi.js'
import {state} from '../../engine/state'
import {center} from '../../engine/placement'
import {cloneDeep, each} from 'lodash'

import sprites from './images/*'

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

  let size = 1300

  mc.width = size
  mc.height = size / 1.7

  center(mc)

  state.app.stage.addChild(mc);

  mc.play()

  mc.animationSpeed = 0.3
  mc.anchor.set(0)

  // let cmf = new PIXI.filters.ColorMatrixFilter()
  let cmf2 = new PIXI.filters.ColorMatrixFilter()
  mc.filters = [cmf2];
  // cmf2.contrast(1)
  // cmf2.negative()
  cmf2.brightness(0.2)

  // cmf.hue(100, 10)
  // cmf.greyscale(0.2)
  // mc.blendMode = PIXI.BLEND_MODES.SCREEN

  let x = 0
  state.app.ticker.add(() => {
    // console.log(window.innerWidth, window.innerHeight)
    x += 0.01
    // cmf.hue(Math.abs(Math.cos(x)) * 100, false)
    // console.log(Math.abs(Math.cos(x)) * 10)
    // mc.rotation = Math.cos(x) / 10
    // mc.scale.set(1 - Math.cos(x) / 10)
    // mc.animationSpeed = Math.cos(x)
    // mc.position.x = (window.innerWidth / 2) - (mc.width / 2) + (200 * ( Math.cos(x)))
    // mc.position.x = (window.innerWidth / 2) - ((mc.width / 2) * 3) + (200 * ( Math.exp(Math.cos(x))))
    // mc.position.y = (window.innerHeight / 2) - (mc.height / 2) + (200 * ( Math.sin(x)))
    // console.log((20 * ( Math.sin(x))))
    // mc.position.x += 20 * ( Math.sin(4*x)/x)
  })
}

export let stop = () => {
  mc.destroy()
}
