import * as PIXI from 'pixi.js'
import {state} from './state'
import {minutesToMs} from './utils'

interface options{
  time?:{
    start:number
    stop:number
  }
  loop?:boolean
}

class Video {
  video:any = {}
  texture:any = {}
  sprite:any = {}
  container:any = {}
  url:string = ''
  timeLoop:any = {}

  constructor(url, options:options = {}) {
    if(options.time) this.timeLoop = options.time

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
    // this.container.visible = true
    setTimeout(() => { this.container.visible = false }, 500)

    this.video.muted = true

    setTimeout(() => {
      if(this.timeLoop.start) {
        this.video.currentTime = this.timeLoop.start / 1000
        this.video.play()
      }
      this.video.addEventListener('timeupdate', this.loopSection)
      this.container.visible = true
    }, 2000)
  }

  loopSection = (e):void => {
    if (!this.timeLoop.start || !this.timeLoop.stop) return

    let v = e.target
    if (minutesToMs(v.currentTime) >= this.timeLoop.stop) {
        v.currentTime = this.timeLoop.start / 1000;
        v.play();
    }

  }

  stop() {
    this.video.removeEventListener('timeupdate', this.loopSection)
    this.video.pause()
    this.sprite.destroy()
  }
}

export default Video
