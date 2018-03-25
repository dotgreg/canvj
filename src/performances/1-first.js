import {visual, removeVisual, removeAllVisuals} from '../engine/visuals'
import {startKeysTracking, stopKeysTracking} from '../engine/keys'
import * as PIXI from 'pixi.js'
import {state} from '../engine/state'
import {square, circle, triangle} from '../engine/shapes'
import {random} from 'lodash'

import {add} from '../engine/visuals2'


export let goToCompo = (nb) => {
  removeAllVisuals()
  console.log(`animate to ${nb}`)

  switch (nb) {
    case 1:
      // visual('sprite2')
      // visual('sprite1')

      add('10.mp4', {o: 0.2})
      add('fire.mp4')
      add('triangle', 400)

      // add('10.mp4',{bw: false, o: 0.2})
      // mask(add('fire.mp4'), add('triangle', {s: 400}))



      setTimeout(() => {


        //visual('fire')
        //mask(visual('fire'), triange(400))

        // let sq, sq2
        // let fire = visual('fire')
        // sq = triangle(400, '000000')
        // sq2 = triangle(400, '000000')
        // let water = visual('water')
        // water.container.mask = sq

        // let sq, sq2
        // let fire = visual('fire')
        // sq = circle(300, '000000')
        // sq2 = circle(300, '000000')
        // let water = visual('water')
        // water.container.mask = sq

        // let water = visual('water')
        // sq = circle(300, '000000')
        // sq2 = circle(300, '000000')
        // let fire = visual('fire')
        // fire.container.mask = sq
      }, 100)
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
