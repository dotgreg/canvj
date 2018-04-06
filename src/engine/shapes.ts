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

export const square = (p) => {
  return graphics(p.c, graphics => {
    graphics.drawRect(p.s, p.s, state.width - (p.s*2), state.height - (p.s*2));
  })
}

export const left = (p) => {
  return graphics(p.c, graphics => {
    graphics.drawRect(p.s, p.s, (state.width /2) - (p.s * 1), state.height - (p.s * 2));
  })
}

export const right = (p) => {
  return graphics(p.c, graphics => {
    graphics.drawRect((state.width /2) , p.s, (state.width /2) - (p.s * 1), state.height - (p.s * 2));
  })
}

export const circle = (p) => {
  return graphics(p.c, graphics => {
    graphics.drawCircle( state.width/2, state.height/2, p.s);
  })
}

export const triangle = (p) => {
  return graphics(p.c, graphics => {
    let o = {x: (state.width/2) - (p.s/7), y: (state.height/2) - (p.s/2)}
    graphics.moveTo(o.x, o.y);
    graphics.lineTo(o.x + p.s/1.6, o.y + p.s);
    graphics.lineTo(o.x - p.s/1.6, o.y + p.s);
    graphics.endFill();
  })
}

export const cross = (p) => {
  // return graphics(color, graphics => {
  //   let o = {x: (state.width/2), y: (state.height/2) }
  //   graphics.moveTo(o.x, o.y);
  //   graphics.lineTo(o.x + size/1.6, o.y + size);
  //   graphics.lineTo(o.x - size/1.6, o.y + size);
  //   graphics.endFill();
  // })
}
