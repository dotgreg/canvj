import {fabric} from 'fabric'
import {e} from '../../engine'

// SIMPLE GEOMETRY
let rect = {}

let moveLeft = () => {
  rect.animate('left','+=200',{
    onChange: e.canvas.renderAll.bind(e.canvas),
    duration: 8000,
    easing: fabric.util.ease.easeOutBounce
  })
}

export let start = () => {

  rect =  new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    selectable: true,
    angle: 45
  });

  e.canvas.add(rect)
  moveLeft()
}
