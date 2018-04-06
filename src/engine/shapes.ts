import * as PIXI from 'pixi.js'
import {state} from './state'
import {filters} from './filters'
import * as PIXIF from 'pixi-filters'

const graphics  = (color = '000000', code) => {
  let shape = new PIXI.Graphics();
  shape.beginFill(`0x${color}`,1)
  code(shape)
  shape.endFill()

  // shape.filters = filters([
  // //    // new PIXIF.AsciiFilter(7)
  // //    // new PIXI.filters.BlurFilter()
  // //    // new PIXIF.RGBSplitFilter()
  //  ])

  state.app.stage.addChild(shape);
  return shape
}

export const circle = (p) => {
  return graphics(p.c, graphics => {
    graphics.drawCircle( state.width/2, state.height/2, p.s);
  })
}

export const triangle = (p) => {
  return graphics(p.c, graphics => {
    let o = {x: (state.width/2), y: (state.height/2) - (p.s/2)}
    graphics.moveTo(o.x, o.y);
    graphics.lineTo(o.x + p.s/1.6, o.y + p.s);
    graphics.lineTo(o.x - p.s/1.6, o.y + p.s);
    graphics.endFill();
  })
}

export const cross = (p) => {
  let x = state.width/2 - ((p.s)/2)
  let y = state.height/2 - ((p.s*3)/2)
  let size = p.s
  return graphics(p.c, graphics => {
    graphics.drawPolygon([
      x, y,
      x+size, y,
      x+size, y+size,
      x+(2*size), y+size,
      x+(2*size), y+(2*size),
      x+(size), y+(2*size),
      x+(size), y+(3*size),
      x, y+(3*size),
      x, y+(2*size),
      x - size, y+(2*size),
      x - size, y+(size),
      x , y+(size),
    ]);
  })
}

//
// square based pattern
//

export const square = (p) => {
  return graphics(p.c, graphics => {
    graphics.drawRect(p.s, p.s, state.width - (p.s*2), state.height - (p.s*2));
  })
}

//
// left right
//

export const left = (p) => graphics(p.c, graphics => graphics.drawRect(p.s, p.s, (state.width /2) - (p.s * 1), state.height - (p.s * 2)))
export const right = (p) => graphics(p.c, graphics => graphics.drawRect((state.width /2) , p.s, (state.width /2) - (p.s * 1), state.height - (p.s * 2)))

//
// 3
//

let tier = () => state.width / 3
let w = s => tier() - (2 * s)
let h = s => state.height - (2 * s)

export const tier1 = (p) => graphics(p.c, graphics => graphics.drawRect((tier() * 0) + p.s, p.s, w(p.s), h(p.s) ))
export const tier2 = (p) => graphics(p.c, graphics => graphics.drawRect((tier() * 1) + p.s, p.s, w(p.s), h(p.s) ))
export const tier3 = (p) => graphics(p.c, graphics => graphics.drawRect((tier() * 2) + p.s, p.s, w(p.s), h(p.s) ))
