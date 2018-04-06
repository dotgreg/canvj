import * as PIXI from 'pixi.js'
import {state} from './state'
import {assign, each, find, findIndex, random} from 'lodash'
import Video from './video'
import {filters, bw, brightness} from './filters'
import {minutesToMs} from './utils'
import * as shapes from '../engine/shapes'
import * as F from 'pixi-filters'
declare var require

let v = require('../visuals/videos/*')

export let visuals = []

//
// ADD v3
//

interface optionsV {
  o?:number
  bw?: boolean
  ascii?: number
  pix?: number
  noise?: number
  blur?: number
  rgb?: boolean
  dot?: number
  extra?:any[]
}

export let addV = (path:string, options:optionsV = {}) => {

  let arr = path.split('?')
  let filename = arr[0]


  let time
  if (arr[1]) {
    let timeRaw = arr[1]
    time = {
      start: minutesToMs(timeRaw.split(':')[0]),
      stop: (timeRaw.split(':')[1]) ? minutesToMs(timeRaw.split(':')[1]) : 10000000
    }
  }

  let visual = (time) ? new Video(v[filename],{time: time}) : new Video(v[filename])

  let filtersArr = []
  if (options.bw) filtersArr.push(bw())
  if (options.o) filtersArr.push(brightness(options.o))
  if (options.ascii) filtersArr.push(new F.AsciiFilter(options.ascii))
  if (options.rgb) filtersArr.push(new F.RGBSplitFilter())
  if (options.pix) filtersArr.push(new F.PixelateFilter(options.pix))
  if (options.blur) filtersArr.push(new PIXI.filters.BlurFilter(options.blur))
  // if (options.noise) filtersArr.push(new PIXI.filters.NoiseFilter(options.noise))
  if (options.noise) filtersArr.push(new F.OldFilmFilter(options.noise))
  if (options.dot) filtersArr.push(new F.DotFilter(options.dot))
  if (options.extra) each(options.extra, filter => filtersArr.push(filter))

  visual.sprite.filters = filters(filtersArr)

  state.app.stage.addChild(visual.container);

  visuals.push(visual)
  return visual
}

interface optionsS {
  s?:number
  c?:string
}

export let addS = (type:string, options:optionsS) => {
  let shape = shapes[type](options)

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
