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
}

export let stop = () => {
  item.destroy()
}
