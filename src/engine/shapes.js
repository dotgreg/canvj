import * as PIXI from 'pixi.js'
import {state} from './state'
import {filters} from './filters'
import * as PIXIF from 'pixi-filters'

const graphics  = (color = '000000', code) => {
  let shape = new PIXI.Graphics();
  shape.beginFill(`0x${color}`,1)
  code(shape)
  shape.endFill()

  shape.filters = filters([
  //    // new PIXIF.AsciiFilter(7)
  //    // new PIXI.filters.BlurFilter()
  //    // new PIXIF.RGBSplitFilter()
   ])

  state.app.stage.addChild(shape);
  return shape
}

export const square = (border = 100, color = '000000') => {
  return graphics(color, graphics => {
    graphics.drawRect(border, border, state.width - (border*2), state.height - (border*2));
  })
}

export const circle = (size = 100, color = '000000') => {
  return graphics(color, graphics => {
    graphics.drawCircle( state.width/2, state.height/2, size);
  })
}

export const triangle = (size = 100, color = '000000') => {
  return graphics(color, graphics => {
    let o = {x: (state.width/2) - (size/7), y: (state.height/2) - (size/2)}
    graphics.moveTo(o.x, o.y);
    graphics.lineTo(o.x + size/1.6, o.y + size);
    graphics.lineTo(o.x - size/1.6, o.y + size);
    graphics.endFill();
  })
}

export const cross = (size = 100, color = '000000') => {
  return graphics(color, graphics => {
    let o = {x: (state.width/2), y: (state.height/2) }
    graphics.moveTo(o.x, o.y);
    graphics.lineTo(o.x + size/1.6, o.y + size);
    graphics.lineTo(o.x - size/1.6, o.y + size);
    graphics.endFill();
  })
}
