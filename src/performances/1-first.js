import {addVisual, removeVisual, removeAllVisuals} from '../engine/visuals'
import {startKeysTracking, stopKeysTracking} from '../engine/keys'




export let goToCompo = (nb) => {
  removeAllVisuals()
  console.log(`animate to ${nb}`)

  switch (nb) {
    case 1:
      addVisual('sprite1')
      break;
    case 2:
      addVisual('sprite1')
      addVisual('video1')

      break;
    default:

  }
}

export let initKeysTracking = () => {
  let mapping = [
    ['1', () => goToCompo(1)],
    ['2', () => goToCompo(2)]
  ]
  startKeysTracking(mapping)
}
