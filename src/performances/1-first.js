import {visual, removeVisual, removeAllVisuals} from '../engine/visuals'
import {startKeysTracking, stopKeysTracking} from '../engine/keys'
import * as PIXI from 'pixi.js'
import {state} from '../engine/state'



export let goToCompo = (nb) => {
  removeAllVisuals()
  console.log(`animate to ${nb}`)

  switch (nb) {
    case 1:
      // visual('sprite2')
      // visual('sprite1')

      setTimeout(() => {
      let water = visual('water')

      var g1 = new PIXI.Graphics();
      g1.drawRect(50, 50, state.width - 100, state.height - 100);
      state.app.stage.addChild(g1);

      var g2 = new PIXI.Graphics();
      g2.drawRect(50, 50, state.width - 100, state.height - 100);
      state.app.stage.addChild(g2);

      let fire = visual('fire')
      fire.container.mask = g2
      // g2.mask = water
      visual('michel')
      }, 1000)
      // visual('camerasinlove')

      break;
    case 2:
      visual('sprite2')
      visual('sprite3')
      visual('sprite1')
      // visual('video1')

      break;
    case 3:
      visual('sprite2')
      visual('michel')
      visual('head2')
      visual('camerasinlove')
      // visual('video1')

      break;
    case 4:
      // visual('sprite2')
      visual('michel')
      visual('fire')

      break;
    case 5:
      // visual('sprite2')
      // visual('michel')
      // visual('fire')

      break;
    default:
  }
}

export let initKeysTracking = () => {
  let mapping = [
    ['1', () => goToCompo(1)],
    ['2', () => goToCompo(2)],
    ['4', () => goToCompo(4)],
    ['4', () => goToCompo(4)],
    ['5', () => goToCompo(5)]
  ]
  startKeysTracking(mapping)
}
