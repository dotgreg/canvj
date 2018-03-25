import {state} from './state'
import {assign} from 'lodash'
import Video from './video'
import {filters} from './filters'
import * as shapes from '../engine/shapes'

let visuals = []

export let add = (...args) => {
  if(args[0].endsWith('.mp4')) addVideoVisual(args)

  let shapes = ['triangle', 'square', 'circle']
  if (find(shapes, args[0])) addShapeVisual(args)
}

export let removeAll = () => {
  each(visuals, visual => visual.stop())
  visuals = []
}

//
//
//

export let addShapeVisual = (args) => {
  let params = args.shift()
  let shape = shapes[args[0]](params)

  let visual = {
    item: shape,
    stop: () => {
      state.app.stage.removeChild(shape)
    }
  }

  visuals.push(visual)
}

export let addVideoVisual = (args) => {
  let visual = Video(args[0])

  let init = {
    speed: 1,
    brightness: 1
  }
  let params = assign(init, args[1])
  console.log(params)

  visual.video.playbackRate = params.speed

  visual.sprite.filters = filters([new PIXI.filters.ColorMatrixFilter(), new PIXI.filters.ColorMatrixFilter()])
  visual.sprite.filters[0].brightness(params.brightness)
  visual.sprite.filters[1].blackAndWhite()

  state.app.stage.addChild(visual.container);

  visuals.push(visual)
}
