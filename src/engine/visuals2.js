import {state} from './state'
import {assign, each, find, findIndex} from 'lodash'
import Video from './video'
import {filters} from './filters'
import * as shapes from '../engine/shapes'

export let visuals = []

export let add = (...args) => {
  if(args[0].endsWith('.mp4')) return addVideoVisual(args)

  let shapes = ['triangle', 'square', 'circle']
  if (shapes.indexOf('square') > -1) return addShapeVisual(args)
}

export let removeAllVisuals = () => {
  each(visuals, visual => {visual.stop()})
  visuals = []
}

//
//
//

export let addShapeVisual = (args) => {
  let params = [...args]
  params.shift()
  let shape = shapes[args[0]](...params)

  let visual = {
    sprite: shape,
    stop: () => {
      state.app.stage.removeChild(shape)
    }
  }

  visuals.push(visual)
  return visual
}

export let addVideoVisual = (args) => {

  let visual = new Video(args[0])

  let init = {
    s: 1,
    o: 1
  }
  let params = assign(init, args[1])

  visual.video.playbackRate = params.s

  visual.sprite.filters = filters([new PIXI.filters.ColorMatrixFilter(), new PIXI.filters.ColorMatrixFilter()])
  visual.sprite.filters[0].brightness(params.o)
  visual.sprite.filters[1].blackAndWhite()

  state.app.stage.addChild(visual.container);

  visuals.push(visual)
  return visual
}
