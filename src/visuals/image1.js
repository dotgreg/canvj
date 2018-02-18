import {fabric} from 'fabric'
import {e} from '../engine'

// SIMPLE GEOMETRY
let res = {}

export let start = () => {

  fabric.Image.fromURL('https://lorempixel.com/400/200/', (img) => {
    img.scale(0.2).set({left: 100, top: 50, flipY: true})
    e.canvas.add(img)
    img.filters.push(
      new fabric.Image.filters.Sepia(),
      // new fabric.Image.filters.Brightness({ brightness: 10 })
    );
    img.applyFilters()

    img.clipTo = function (ctx) {
      ctx.arc(0, 0, 100, 0, Math.PI * 2, true)
    }
  })

}
