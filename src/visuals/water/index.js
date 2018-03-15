import * as PIXI from 'pixi.js'
import {state} from '../../engine/state'
import Video from '../../engine/video'
import {filters} from '../../engine/filters'

let item = {}

import vid from './water.mp4'

export let start = () => {

  item = new Video(vid)
  item.video.playbackRate = 0.7


  item.sprite.filters = filters([new PIXI.filters.ColorMatrixFilter(), new PIXI.filters.ColorMatrixFilter()])
  item.sprite.filters[0].brightness(0.2)
  item.sprite.filters[1].blackAndWhite()

  state.app.stage.addChild(item.container);

  return item
}

export let stop = () => {
  item.stop()
}
