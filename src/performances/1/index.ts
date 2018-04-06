import * as PIXI from 'pixi.js'
import {random} from 'lodash'

import {state} from '../../engine/state'

import {addS, addV, removeAllVisuals, visuals} from '../../engine/visuals2'
import {mask} from '../../engine/mask'

import * as F from 'pixi-filters'

import {startKeysTracking, stopKeysTracking} from '../../engine/keys'

declare var require
// @ts-ignore
// let v = require('../../videos/*')

export let goToCompo = (nb) => {
  removeAllVisuals()
  console.log(`animate to ${nb}`)

  switch (nb) {
    case 1:
      // extra: [ new F.BloomFilter()]
      // 1
      // addV('lightspeed.mp4?0.20:0.40', {o:1, bw: true, ascii: 5})
      mask(addV('water.mp4', {o:0.3, bw: true, pix: 15}), addS('square', {s: 50, c: '0f0000'}))
      addS('circle', {s: 250, c: '0f0000'})
      mask(addV('spaceodysee1.mp4?2.22:3.40'), addS('circle', {s: 250, c:'000'}))

      // 2
      // addV('lightspeed.mp4?0.20:0.40', {o:1, bw: true, ascii: 5})
      // addS('triangle', {s: 300, c:'00000'})
      // mask(addV('space1.mp4', {o: 2, bw: true, rgb: false}),  addS('triangle', {s: 300}))

      break;
    case 2:
      // addV('lightspeed.mp4?0.20:0.40', {o:1, bw: true, ascii: 5})
      // let v2 = addV('space1.mp4', {o: 2, bw: true, rgb: false})
      // addS('triangle', {s: 500, c:'ff0000'})
      // mask(v2,  addS('triangle', {s: 500}))
      // let v2 = addV('lightspeed.mp4?0.20:0.40', {o:1, bw: true, ascii: 5})
      // add2(water, space2, {o: 0.2})
      // add('triangle', 300, '000000')
      // mask(add(space1, {o: 1}), add('triangle', 300))
      break;
    case 3:
      // add(water, {o: 0.2})
      // add('triangle', 300, '000000')
      // mask(add(space1, {o: 0.2}), add('circle', 300))

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
