// import * as Visuals from '../visuals/**/*'
import * as sprite1 from '../visuals/sprite1'
import * as video1 from '../visuals/video1'

import {state} from './state'

let Visuals = {
  sprite1: sprite1,
  video1: video1,
}

export let addVisual = (name) => {
    Visuals[name].start()
}

export let removeVisual = (name) => {
    Visuals[name].stop()
}

export let removeAllVisuals = () => {
  console.log(state.app)
  state.app.stage.removeChildren()
}
