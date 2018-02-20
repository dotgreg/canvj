// import * as Visuals from '../visuals/**/*'
import * as sprite1 from '../visuals/sprite1'
import * as sprite2 from '../visuals/sprite2'
import * as sprite3 from '../visuals/sprite3'
import * as michel from '../visuals/michel'
import * as video1 from '../visuals/video1'

import {state} from './state'
import {filter, each, forOwn, pickBy} from 'lodash'

let Visuals = {
  sprite1: sprite1,
  sprite2: sprite2,
  michel: michel,
  sprite3: sprite3,
  video1: video1,
}

export let addVisual = (name) => {
    Visuals[name].start()
    Visuals[name].started = true
}

export let removeVisual = (name) => {
    Visuals[name].stop()
    Visuals[name].started = false
}

export let removeAllVisuals = () => {
  let activeVisuals = pickBy(Visuals, {started: true})
  forOwn(activeVisuals, (v,i) => {
    removeVisual(i)
  })
  state.app.stage.removeChildren()
}
