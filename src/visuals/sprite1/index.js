import * as PIXI from 'pixi.js'
import {state} from '../../engine/state'
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

  state.app.stage.addChild(mc);
  mc.position.x = 10
  mc.position.y = 200
  mc.width = 300
  mc.height = 300
  mc.play()

  mc.blendMode = PIXI.BLEND_MODES.SCREEN
}

export let stop = () => {
  mc.destroy()
}
