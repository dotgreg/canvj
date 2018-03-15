import * as PIXI from 'pixi.js'
import {each} from 'lodash'
import {center} from './placement'

export const sprite = (images, size, position) => {
  let gifImages = []
  let baseurl = 'http://localhost:1234'
  each(images, (i => gifImages.push(baseurl + i)))
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
