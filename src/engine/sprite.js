import * as PIXI from 'pixi.js'
import {each} from 'lodash'
import {center} from './placement'
import {state} from './state'

export const sprite = (images, size, position) => {
  let gifImages = []
  console.log(state.baseurl + images[0])
  each(images, (i => gifImages.push(state.baseurl + i)))
  let textureArray = [];

  for (let i=0; i < gifImages.length; i++)
  {
    let texture = PIXI.Texture.fromImage(gifImages[i]);
    textureArray.push(texture);
  };

  let sprite = new PIXI.extras.AnimatedSprite(textureArray);

  size = size || 500
  position = position || 'center'

  sprite.width = size
  sprite.height = size

  sprite.play()
  sprite.anchor.set(0)

  if (position === 'center') center(sprite)

  // return textureArray
  return sprite
}
