import * as PIXI from 'pixi.js'
import {state} from './state'

class Video  {
  constructor(url) {
    this.video = {}
    this.texture = {}
    this.sprite = {}
    this.container = {}
    this.url = state.baseurl + url

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
