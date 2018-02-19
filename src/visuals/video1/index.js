import * as PIXI from 'pixi.js'
import {state} from '../../engine/state'

let item = {}

export let start = () => {
  var texture = PIXI.Texture.fromVideoUrl('https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4');
  item = new PIXI.Sprite(texture);
  item.position.x = 200;
  item.position.y = 200;
  item.width = 200;
  item.height = 100;

  var filter = new PIXI.filters.ColorMatrixFilter();
  item.blendMode = PIXI.BLEND_MODES.MULTIPLY

  state.app.stage.addChild(item);
  console.log(item)
  console.log(item.texture.baseTexture.source)
}

export let stop = () => {
  let video = item.texture.baseTexture.source
  console.log(video)
  video.pause()
  // console.log('stop!')
  // console.log(video.paused())
  // video.pause()
  // console.log(video.paused())

  // item.texture.destroy()
  item.destroy()
}
