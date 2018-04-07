import * as PIXI from 'pixi.js'

export let testFilter = ():PIXI.filter => {
    var fragSrc = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;
    uniform float uTime;
    uniform vec2 dimensions;
    uniform vec4 filterArea;

    vec2 mapCoord( vec2 coord )
    {
        coord *= filterArea.xy;

        return coord;
    }

    vec2 unmapCoord( vec2 coord )
    {
        coord /= filterArea.xy;

        return coord;
    }


    void main() {
      vec2 coord = vTextureCoord;
      coord = mapCoord(coord ) / dimensions;

      //if (coord.x > 0.5) coord.x = 1.0 - coord.x;
      //if (coord.y > 0.5) coord.y = 1.0 - coord.y;
      //if (coord.x > 0.5) coord.x = coord.x + (cos(uTime) / 10.0);
      if (coord.x > 0.5) coord.x = coord.x + (cos(uTime) / 50.0);

      coord = unmapCoord(coord * dimensions);
      gl_FragColor = texture2D( uSampler, coord );
    }
  `
  let filter = new PIXI.Filter( null, fragSrc )
  // this is a FREAKING LOOP :D

  let time = 0
  filter.apply = function(filterManager, input, output, clear)
  {
    time += 0.1
    this.uniforms.uTime = time
    this.uniforms.dimensions[0] = input.sourceFrame.width
    this.uniforms.dimensions[1] = input.sourceFrame.height
    filterManager.applyFilter(this, input, output, clear);
  }
  return filter
}
