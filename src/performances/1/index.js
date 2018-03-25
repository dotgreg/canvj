import * as PIXI from 'pixi.js'
import {random} from 'lodash'

import {state} from '../../engine/state'

import {add, removeAllVisuals, visuals} from '../../engine/visuals2'
import {mask} from '../../engine/mask'

import {startKeysTracking, stopKeysTracking} from '../../engine/keys'

import water from './water.mp4'
import space1 from './space1.mp4'

export let goToCompo = (nb) => {
  // removeAllVisuals()
  removeAllVisuals()
  console.log(`animate to ${nb}`)

  switch (nb) {
    case 1:
      // visual('sprite2')
      // visual('sprite1')

      add(space1, {o: 0.2})
      add('triangle', 300, '000000')
      mask(add(water, {o: 0.2}), add('triangle', 300))

      console.log(visuals)

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
      // add(space1, {o: 0.2})
      add(water, {o: 0.2})
      add('triangle', 300, '000000')
      mask(add(space1, {o: 0.2}), add('circle', 300))
      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

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
