import * as PIXI from 'pixi.js'
import {state} from './state'
import {assign, each, find, findIndex, random} from 'lodash'
import Video from './video'
import {filters, bw} from './filters'
import * as shapes from '../engine/shapes'
import * as F from 'pixi-filters'
declare var require

export let visuals = []

//
// ADD v3
//

export let addV = (url:string, filtersArr:any[], options?:any) => {

  let visual = new Video(url)

  if (options.bw) filtersArr.push(bw()); console.log(bw());
  // console.log(filtersArr)
  let filter = new PIXI.filters.ColorMatrixFilter()

  visual.sprite.filters = filters([
    filter,
    // new F.CRTFilter()
  ])
  filter.blackAndWhite = true

  state.app.stage.addChild(visual.container);

  visuals.push(visual)
  return visual
  //new PIXI.filters.ColorMatrixFilter(), new PIXI.filters.ColorMatrixFilter()
}

export let addS = (type:string, params:Object) => {
  let shape = shapes[type](params)

  let visual = {
    sprite: shape,
    stop: () => {
      state.app.stage.removeChild(shape)
    }
  }

  return visual
}



//
// WORKING STUFFS
//

export let removeAllVisuals = () => {
  each(visuals, visual => {visual.stop()})
  visuals = []
}
