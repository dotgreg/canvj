import {each} from 'lodash'
import * as PIXI from 'pixi.js'

// const filters = [
//   ['brightness', 'ColorMatrixFilter'],
//   ['lsd', 'ColorMatrixFilter']
// ]
//
// filter = filter => {
//
//   return pixifilter
// }
//
// export const filters2 = array => {
//   let filters
//
//   each(array, filter => {
//     getFilter(filter)
//     filters.push
//   })
//
//   filters = [cmf, cmf2, new PIXI.filters.VoidFilter()];
//   filters[item.filters.length - 1].blendMode = PIXI.BLEND_MODES.SCREEN;
//
//   return filters
// }

export const filters = filters => {

  filters.push(new PIXI.filters.VoidFilter());
  filters[filters.length - 1].blendMode = PIXI.BLEND_MODES.SCREEN;

  return filters
}

export const bw = () => {
  let filter = new PIXI.filters.ColorMatrixFilter()
  // filter.blackAndWhite = true
  filter.brightness = 0.2
  return filter
}
