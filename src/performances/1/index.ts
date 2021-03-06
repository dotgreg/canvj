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

  switch (nb) {
    case 1:
      // extra: [ new F.BloomFilter()]

      // addV('lightspeed.mp4?0.20:1.20', {o:2, bw: false, rgb: true })
      // addS('triangle', {s: 300, c:'00000'})
      // mask(addV('space1.mp4', {o: 2, bw: true, rgb: false}),  addS('triangle', {s: 300}))

      //---
      //addV('berlincalling1.mp4?0.20', {o:2, bw: false, rgb: true })


      //---
      // addV('berlincalling1.mp4?0.20', {o:2, bw: false, rgb: true })
      //addV('lava1.mp4?0.20', {o:2, bw: false, dot: 10})

      //---
      //addV('lava1.mp4?0.20', {o:2, bw: false, dot: 10})

      //---
      // addV('lava1.mp4?0.20', {o:2, bw: false, dot: 10})
      // addS('circle', {s: 250, c:'000'})
      // mask(addV('eyeman1.mp4'), addS('circle', {s: 250, c:'000'}))


      //---
      // addV('godarddance.mp4', {o:2, bw: false})

      //---
      // addV('lightspeed.mp4?0.20:1.20', {o:2, bw: false, rgb: true })
      // addS('square', {s: 100})
      // mask(addV('godarddance.mp4', {o:2, bw: false}),  addS('square', {s: 100}))

      //---
      // addV('lightspeed.mp4?0.30', {o:2, bw: false, rgb: true })
      // addS('circle', {s: 300})
      // mask(addV('godarddance.mp4', {o:2, bw: false, dot: 10}),  addS('circle', {s: 300}))

      //---
      // addV('spacex1.mp4', {o:2, bw: false, rgb: false })

      //---
      // addV('spacex1.mp4', {o:2, bw: false, ascii: 10 })
      // addS('circle', {s: 300})
      // mask(addV('floweropening1.mp4', {o:2}),  addS('circle', {s: 300}))

      // //---
      // addV('lava1.mp4?0.20', {o:2, bw: false })
      // addS('circle', {s: 300})
      // mask(addV('floweropening1.mp4', {o:2}),  addS('circle', {s: 300}))

      //--- ++++
      // addV('sky1.mp4?0.15', {o:2, bw: false })
      // mask(addV('faces1.mp4?0.15', {o:1}),  addS('circle', {s: 300}))

      //---
      // addV('space1.mp4', {o:1, bw: false})
      // // addS('circle', {s: 300, o:0.2})
      // mask(addV('faces1.mp4?0.20', {o:1}),  addS('circle', {s: 250}))

      //--- +++
      // addV('spaceodysee1.mp4?2.15', {o:2, bw: false, rgb: true})

      //---
      // addV('godarddance.mp4?0.15', {o:2, bw: false, dot: 10})
      // addS('circle', {s: 300, c:'000'})
      // mask(addV('eyeman1.mp4', {o:1, bw: true}), addS('circle', {s: 300, c:'000'}))

      //---
      // addV('sky1.mp4?0.15', {o:2, bw: false})
      // addS('circle', {s: 300, c:'000'})
      // mask(addV('eyeman1.mp4', {o:1, bw: true}), addS('circle', {s: 300, c:'000'}))

      //--- ++
      // addV('berlincalling1.mp4?0.25', {o:2, bw: false })
      // addV('lightspeed.mp4?0.20', {o:1.5, bw: true})

      //--- berlin calling tier
      // mask(addV('lava1.mp4?1.10', {o:2, bw: false}), addS('tier1', {s: 50, c:'000'}))
      // mask(addV('berlincalling1.mp4?1e.10', {o:0.8, bw: true}), addS('tier2', {s: 50, c:'000'}))
      // mask(addV('lava2.mp4', {o:2, bw: false}),  addS('tier3', {s: 50, c:'000'}))

      //--- ++
      // mask(addV('spaceodysee2.mp4?2.10', {o:2, bw: false}), addS('right', {s: 50, c:'000'}) )
      // mask(addV('lava2.mp4?1.10', {o:2, bw: false}), addS('left', {s: 50, c:'000'}) )

      //--- ++++
      // mask(addV('godardfemme.mp4?1.10', {o:1, bw: false}), addS('square', {s: 50, c:'000'}) )

      //--- ++++++
     //  mask(addV('godardfemme.mp4?1.10', {o:1, bw: false}), addS('square', {s: 50, c:'000'}) )
     //  addS('triangle', {s: 300, c:'00000'})
     // mask(addV('lava2.mp4', {o: 2, bw: false, rgb: false}),  addS('triangle', {s: 300}))

      // //--- ++++++
      mask(addV('godarddance.mp4?0.10', {o:1, bw: false}), addS('square', {s: 50, c:'000'}) )
      addS('cross', {s: 120, c:'00000'})
      mask(addV('lava2.mp4', {o: 3, bw: false, pix: 20}),  addS('cross', {s: 120}))

      // //--- ++++++
      mask(addV('godarddance.mp4?0.10', {o:1, bw: true}), addS('square', {s: 50, c:'000'}) )
      addS('cross', {s: 120, c:'00000'})
      mask(addV('lava2.mp4', {o: 3, bw: true, pix: 20}),  addS('cross', {s: 120}))

      //--- ++++++
      // mask(addV('spaceodysee2.mp4?2.00', {o:1, bw: false}), addS('square', {s: 50, c:'000'}) )
      // addS('cross', {s: 70, c:'00000'})
      // mask(addV('lava2.mp4', {o: 1, bw: false, pix: 20}),  addS('cross', {s: 70}))

      //--- ++++++
      // addV('bgshockwave.mp4', {o:2, bw: false, ascii: 10})
      // addS('cross', {s: 70, c:'00000'})
      // mask(addV('lava2.mp4', {o: 1, bw: false, pix: 20}),  addS('cross', {s: 70}))

      //--- ++++++
      // addV('space1.mp4', {o:2, bw: false, ascii: 10})
      // addS('square', {s: 200, c:'00000'})
      // mask(addV('berlincalling1.mp4', {o: 2, bw: false}),  addS('square', {s: 200}))


      //--- ++++
      // addV('bgpulseround.mp4')
      // mask(addV('eye2.mp4', {o:2, bw: false}), addS('circle', {s: 200, c:'000'}) )

      //--- +++
      // addV('bgpulseround.mp4')
      // mask(addV('faceblack.mp4?0.15', {o:2, bw: false}), addS('circle', {s: 200, c:'000'}) )

      // //--- +++
      // addV('bgpulseround.mp4')
      // mask(addV('faceblack.mp4?0.15', {o:2, bw: false}), addS('circle', {s: 200, c:'000'}) )

      //---
      // addV('godarddance.mp4?0.15', {o:2, bw: false})
      // mask(addV('eyeman1.mp4', {o:1, bw: true}), addS('circle', {s: 200, c:'000'}))

      //---
      // addV('dancer1.mp4?1.15:3', {o:2, bw: false})

      // //---
      // mask(addV('80datingmen1.mp4?0.20', {o:1.5, bw: false}), addS('right', {s: 50, c:'000'}))
      // mask(addV('water2.mp4?0.20', {o:1.5, bw: false}), addS('left', {s: 50, c:'000'}))

      // //--- ++
      // addV('spacex1.mp4', {o:2, bw: false, ascii: 15 })
      // addS('circle', {s: 250, c:'000'})
      // mask(addV('dancermoon.mp4?0.05:0.17', {o:1, bw: true}), addS('circle', {s: 250, c:'000'}))

      // //--- ++
      // addV('bgshockwave.mp4', {o:2, bw: false})
      // addS('circle', {s: 170, c:'000'})
      // mask(addV('dancermoon.mp4?0.05:0.17', {o:1, bw: true}), addS('circle', {s: 170, c:'000'}))


      // //--- +++
      // addV('bgshockwave.mp4', {o:2, bw: false})
      // addS('circle', {s: 170, c:'000'})
      // mask(addV('faces1.mp4?0.20', {o:1, bw: true}), addS('circle', {s: 170, c:'000'}))

      // //--- ++++
      // addV('bgshockwave.mp4', {o:2, bw: false})
      // addS('cross', {s: 170, c:'000'})
      // mask(addV('faces1.mp4?0.20', {o:1, bw: true}), addS('cross', {s: 170, c:'000'}))

      // //--- +++
      // addV('bgshockwave.mp4', {o:2, bw: false})
      // addS('cross', {s: 170, c:'000'})
      // mask(addV('berlincalling1.mp4?0.30', {o:1, bw: true}), addS('cross', {s: 170, c:'000'}))

      // //--- +++
      // addV('bgshockwave.mp4', {o:2, bw: false})
      // addS('circle', {s: 170, c:'000'})
      // mask(addV('berlincalling1.mp4?0.30', {o:1, bw: true}), addS('circle', {s: 170, c:'000'}))

      // //--- +++
      // addV('bgshockwave.mp4', {o:2, bw: false})
      // addS('cross', {s: 170, c:'000'})
      // mask(addV('eye2.mp4?0.30', {o:1, bw: true}), addS('cross', {s: 170, c:'000'}))

      // //--- +++++
      // addV('bgshockwave.mp4', {o:2, bw: false})
      // addS('cross', {s: 170, c:'000'})
      // mask(addV('faceblack.mp4?0.20', {o:1, bw: true}), addS('cross', {s: 170, c:'000'}))


      // //--- ++++
      // addV('bgpulseround.mp4', {o:2, bw: true})
      // mask(addV('floweropening1.mp4', {o:1, bw: true}), addS('circle', {s: 300, c:'000'}))

      // //--- ++
      // addV('bgpulseround.mp4', {o:2, bw: true})
      // mask(addV('floweropening1.mp4', {o:1, bw: false, rgb: true}), addS('circle', {s: 300, c:'000'}))


      // //--- ++
      // addV('bgpulseround.mp4', {o:2, bw: false})
      // addS('cross', {s: 170, c:'000'})
      // mask(addV('faces1.mp4?0.20', {o:1, bw: true}), addS('cross', {s: 170, c:'000'}))


      // //--- ++++
      // addV('bgpulseround.mp4', {o:2, bw: true})
      // addS('cross', {s: 170, c:'000'})
      // mask(addV('faces1.mp4?0.20', {o:1, bw: true, dot: 10}), addS('cross', {s: 170, c:'000'}))


      // //---
      // addV('newwaveanims1.mp4?0.20', {o:2, bw: false})
      // addS('circle', {s: 200, c:'000'})
      // mask(addV('lipseye1.mp4?0.20', {o:1, bw: true}), addS('circle', {s: 200, c:'000'}))


      // //+++++
      // addV('bgshockwave.mp4?0.20', {o:1, bw: false})
      // addS('square', {s: 180, c:'000'})
      // mask(addV('floweropening1.mp4?0.20', {o:1, bw: true}), addS('square', {s: 180, c:'000'}))


      // //+++
      // addV('ink4.mp4?0.20', {o:1, bw: true})
      // addS('circle', {s: 180, c:'000'})
      // mask(addV('eye2.mp4?0.20', {o:2, bw: true}), addS('circle', {s: 180, c:'000'}))

      // //+++++
      // addV('ink4.mp4?0.20', {o:1, bw: true})
      // addS('cross', {s: 180, c:'000'})
      // mask(addV('lava1.mp4?0.05', {o:2, bw: false}), addS('cross', {s: 180, c:'000'}))

      // //+++++
      // addV('ink4.mp4?0.20', {o:1, bw: true})
      // addS('circle', {s: 220, c:'000'})
      // mask(addV('berlincalling1.mp4?0.25', {o:1.5, bw: true}), addS('circle', {s: 220, c:'000'}))


      //---
      // addV('bgpulseround.mp4', {bw: true})
      // addS('square', {s: 100, c:'000'})
      // mask(addV('floweropening2.mp4', {o:1, bw: false}), addS('square', {s: 100, c:'000'}) )

      //++++
      // mask(addV('godardfemme.mp4?1.10', {o:1, bw: false}), addS('square', {s: 50, c:'000'}) )

      //++
      // addV('ink4.mp4', {bw: true})
      // addS('circle', {s: 200, c:'000'})
      // mask(addV('faceman1.mp4', {o:1, bw: false}), addS('circle', {s: 200, c:'000'}) )

      //++++
      // addV('bgshockwave.mp4', {bw: true})
      // addS('circle', {s: 170, c:'000'})
      // mask(addV('faceblack.mp4?0.15', {o:1, bw: true}), addS('circle', {s: 170, c:'000'}) )

      //++++
      // addV('bgshockwave.mp4', {bw: true, ascii: 20})
      // addS('circle', {s: 170, c:'000'})
      // mask(addV('faceblack.mp4?0.15', {o:1, bw: true}), addS('circle', {s: 170, c:'000'}) )

      //
      //
      //

      // 1
      // addV('lightspeed.mp4?0.20:0.40', {o:1, bw: true, ascii: 5})
      // mask(addV('water.mp4', {o:0.3, bw: true, pix: 15}), addS('square', {s: 50, c: '0f0000'}))
      // addS('circle', {s: 250, c: '0f0000'})
      // mask(addV('spaceodysee1.mp4?2.22:3.40', {pix: 10}), addS('circle', {s: 250, c:'000'}))

      // 1
      // mask(addV('water.mp4', {o:0.3, bw: true, blur: 15}), addS('square', {s: 50, c: '0f0000'}))
      // addS('square', {s: 0, c:'000000'})
      // mask(addV('water.mp4', {o:0.3, bw: true, dot: 2}), addS('right', {s: 50, c: 'fff'}))
      // addS('left', {s: 50, c:'000'})
      // mask(addV('spaceodysee1.mp4?2.22:3.40'), addS('left', {s: 50, c:'000'}))


      // addS('square', {s: 0, c:'000000'})
      // mask(addV('water.mp4', {o:0.3, bw: true}), addS('right', {s: 50, c: 'fff'}))
      // addS('left', {s: 50, c:'000'})
      // mask(addV('sand1.mp4', {o:0.7, bw: true}), addS('left', {s: 50, c:'000'}))

      // addS('square', {s: 50, c:'ffffff'})
      // mask(addV('bananatimelapse1.mp4', {o:1, bw: true}), addS('square', {s: 50, c: 'fff'}))
      // addS('left', {s: 50, c:'000'})
      // mask(addV('sand1.mp4', {o:0.7, bw: true}), addS('left', {s: 50, c:'000'}))






      // TIER man + flower + ink
      // mask(addV('ink4.mp4', {o:2, bw: false}), addS('tier1', {s: 50, c:'000'}))
      // mask(addV('eyeman1.mp4', {o:2, bw: false, ascii:10}), addS('tier2', {s: 50, c:'000'}))
      // mask(addV('floweropening2.mp4', {o:2, bw: false}), addS('tier3', {s: 50, c:'000'}))

      // addV('eyeman1.mp4', {o:2, bw: false, ascii:15})
      //
      // addV('lightspeed.mp4?0.20:1.20', {o:2, bw: false, rgb: true })
      // addS('triangle', {s: , c:'00000'})
      // mask(addV('space1.mp4', {o: 2, bw: true, rgb: false}),  addS('triangle', {s: 300}))


      // WATER FIRE
      // addS('square', {s: 0, c:'000000'})
      // mask(addV('water2.mp4', {o:1, bw: true}), addS('right', {s: 50, c: 'fff'}))
      // addS('left', {s: 50, c:'000'})
      // mask(addV('lava1.mp4?1.30', {o:0.7, bw: false}), addS('left', {s: 50, c:'000'}))


      // DOUBLE + CIRCLE
      // addS('square', {s: 0, c:'000000'})
      // mask(addV('water.mp4', {o:2, bw: false}), addS('right', {s: 50, c: 'fff'}))
      // addS('left', {s: 50, c:'000'})
      // mask(addV('lava1.mp4?0.10', {o:2, bw: false}), addS('left', {s: 50, c:'000'}))
      // addS('circle', {s: 200, c:'000000'})
      // mask(addV('space1.mp4', {o: 2, bw: true, rgb: false}),  addS('circle', {s: 200}))

      // TIER 3 elements
      // mask(addV('water.mp4', {o:1, bw: false}), addS('tier1', {s: 50, c:'000'}))
      // mask(addV('lava1.mp4?0.10', {o:1, bw: false}), addS('tier2', {s: 50, c:'000'}))
      // mask(addV('space1.mp4', {o: 2, bw: true, rgb: false}),  addS('tier3', {s: 50, c:'000'}))

      // FACEMAN + lave
      // mask(addV('lava1.mp4?0.10', {o:0.8, bw: false}), addS('tier1', {s: 50, c:'000'}))
      // mask(addV('faceman1.mp4', {o:0.8, bw: true}), addS('tier2', {s: 50, c:'000'}))
      // mask(addV('lava2.mp4', {o:0.8, bw: false}),  addS('tier3', {s: 50, c:'000'}))

      //CROSS
      // addS('square', {s: 0, c:'000000'})
      // mask(addV('water.mp4', {o:0.3, bw: true}), addS('square', {s: 50, c: 'fff'}))
      // addS('crossX', {s: 140, c:'000'})
      // mask(addV('sand1.mp4', {o:0.7, bw: false}), addS('crossX', {s: 140, c:'000'}))

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
