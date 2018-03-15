import * as PIXI from 'pixi.js'
import {state} from './state'

// export const video = video => {
//   let baseurl = 'http://localhost:1234'
//   let url = baseurl + video
//   var texture = PIXI.Texture.fromVideoUrl(url);
//   texture.baseTexture.source.loop = true
//
//
//
//   return item
// }

let baseurl = 'http://localhost:1234'

class Video  {
  constructor(url) {
    this.video = {}
    this.texture = {}
    this.sprite = {}
    this.container = {}
    this.url = baseurl + url

    this.texture = PIXI.Texture.fromVideoUrl(this.url);

    this.video = this.texture.baseTexture.source
    this.video.loop = true

    this.sprite = new PIXI.Sprite(this.texture);
    this.sprite.position.x = 0;
    this.sprite.position.y = 0;

    this.sprite.width = state.width;
    this.sprite.height = state.height;

    this.container = new PIXI.Container()
    this.container.addChild(this.sprite)
  }

  stop() {
    this.video.pause()
    this.sprite.destroy()
  }
}

export default Video
