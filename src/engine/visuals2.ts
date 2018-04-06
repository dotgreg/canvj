import * as PIXI from 'pixi.js'
import {state} from './state'
import {assign, each, find, findIndex, random} from 'lodash'
import Video from './video'
import {filters, bw, brightness} from './filters'
import {minutesToMs} from './utils'
import * as shapes from '../engine/shapes'
import * as F from 'pixi-filters'
declare var require

let v = require('../videos/*')

export let visuals = []

//
// ADD v3
//

interface options {
  o?:number
  bw?: boolean
  ascii?: number
  rgb?: boolean
  extra?:any[]
}

export let addV = (path:string, options:options = {}) => {

  let arr = path.split('?')
  let filename = arr[0]


  let time
  if (arr[1]) {
    let timeRaw = arr[1]
    time = {
      start: minutesToMs(timeRaw.split(':')[0]),
      stop: minutesToMs(timeRaw.split(':')[1])
    }
  }

  let visual = (time) ? new Video(v[filename],{time: time}) : new Video(v[filename])

  let filtersArr = []
  if (options.bw) filtersArr.push(bw())
  if (options.o) filtersArr.push(brightness(options.o))
  if (options.ascii) filtersArr.push(new F.AsciiFilter(options.ascii))
  if (options.rgb) filtersArr.push(new F.RGBSplitFilter())
  if (options.extra) each(options.extra, filter => filtersArr.push(filter))

  visual.sprite.filters = filters(filtersArr)

  state.app.stage.addChild(visual.container);

  visuals.push(visual)
  return visual
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
