import * as PIXI from 'pixi.js'
import {random} from 'lodash'

import {state} from '../../engine/state'

import {addS, addV, removeAllVisuals, visuals} from '../../engine/visuals2'
import {mask} from '../../engine/mask'

import * as F from 'pixi-filters'

import {startKeysTracking, stopKeysTracking} from '../../engine/keys'

import {testFilter} from '../../engine/filters/test'

declare var require
// @ts-ignore
// let v = require('../../videos/*')

export let goToCompo = (nb) => {
  removeAllVisuals()

  switch (nb) {
    case 1:

      // //--- ++++++
      // mask(addV('godarddance.mp4?0.10', {o:1, bw: false}), addS('square', {s: 50, c:'000'}) )
      // addS('cross', {s: 120, c:'00000'})
      // mask(addV('lava2.mp4', {o: 3, bw: false, pix: 20}),  addS('cross', {s: 120}))

      // let vid = addV('godarddance.mp4?0.10', {o:1, bw: false, extra: [new F.ReflectionFilter()]})
      // let vid = addV('berlincalling1.mp4?0.10', {o:1, bw: false, mirror:'xy', ascii: 5})
      let vid = addV('berlincalling1.mp4?0.10', {extra:[testFilter()]})
      // addS('cross', {s: 120, c:'00000'})
      // mask(addV('lava2.mp4', {o: 3, bw: false}),  addS('cross', {s: 120}))
      // mask(addV('godarddance.mp4?0.10', {o:1, bw: false, custom:true}), addS('circle', {s: 200, c:'000'}) )
      // vid.sprite.rotation = 0.1
      // console.log(vid)

      // //--- ++++++
      // mask(addV('godarddance.mp4?0.10', {o:1, bw: true}), addS('square', {s: 50, c:'000'}) )
      // addS('cross', {s: 120, c:'00000'})
      // mask(addV('lava2.mp4', {o: 3, bw: false, pix: 20}),  addS('cross', {s: 120}))

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
