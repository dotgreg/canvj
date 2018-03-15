import * as PIXI from 'pixi.js'
import {state} from '../../engine/state'

let item = {}

// import video from './assets/10.mp4'
import video from './assets/space1.mp4'

export let start = () => {

  let baseurl = 'http://localhost:1234'
   let url = baseurl + video
   var texture = PIXI.Texture.fromVideoUrl(url);
   texture.loop = true
   item.loop = true

  // var texture = PIXI.Texture.fromVideoUrl('https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4');
  item = new PIXI.Sprite(texture);
  item.position.x = 0;
  item.position.y = 0;
  item.width = window.innerWidth;
  item.height = window.innerHeight;
  let cmf = new PIXI.filters.ColorMatrixFilter()
  let cmf2 = new PIXI.filters.ColorMatrixFilter()
  // item.filters = [cmf];
  item.filters = [cmf, cmf2, new PIXI.filters.VoidFilter()];
  item.filters[item.filters.length - 1].blendMode = PIXI.BLEND_MODES.SCREEN;
  // item.filterBlendMode = PIXI.BLEND_MODES.ADD
  // item.blendMode = PIXI.BLEND_MODES.SCREEN
  cmf.brightness(1)
  // cmf2.negative(0)
  cmf2.lsd ()

  // var wrapper = new PIXI.Container();
  // wrapper.addChild(item)
  // wrapper.blendMode = PIXI.BLEND_MODES.ADD
  // wrapper.


  // var filter = new PIXI.filters.ColorMatrixFilter();

  state.app.stage.addChild(item);
  // state.app.stage.addChild(item);
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
