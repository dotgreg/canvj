import * as PIXI from 'pixi.js'

export let mirrorFilter = (mirrorX:boolean, mirrorY:boolean):PIXI.filter => {
    var fragSrc = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;
    uniform vec2 dimensions;
    uniform bool mirrorX;
    uniform bool mirrorY;
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

      if (mirrorX) if (coord.x > 0.5) coord.x = 1.0 - coord.x;
      if (mirrorY) if (coord.y > 0.5) coord.y = 1.0 - coord.y;

      coord = unmapCoord(coord * dimensions);
      gl_FragColor = texture2D( uSampler, coord );
    }
  `
  let filter = new PIXI.Filter( null, fragSrc )
  // this is a FREAKING LOOP :D

  filter.apply = function(filterManager, input, output, clear)
  {
    this.uniforms.mirrorX = mirrorX
    this.uniforms.mirrorY = mirrorY
    this.uniforms.dimensions[0] = input.sourceFrame.width
    this.uniforms.dimensions[1] = input.sourceFrame.height
    filterManager.applyFilter(this, input, output, clear);
  }
  return filter
}
