import * as PIXI from 'pixi.js'
import {each} from 'lodash'

export const createSpriteTexture = (images) => {
  let gifImages = []
  let baseurl = 'http://localhost:1234'
  each(images, (i => gifImages.push(baseurl + i)))
  let textureArray = [];

  for (let i=0; i < gifImages.length; i++)
  {
    let texture = PIXI.Texture.fromImage(gifImages[i]);
    textureArray.push(texture);
  };

  return textureArray
}
