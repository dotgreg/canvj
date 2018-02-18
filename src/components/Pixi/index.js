import React from "react";
import ReactDOM from "react-dom";

import * as PIXI from 'pixi.js'
import {cloneDeep, each} from 'lodash'

import './pixi.sass'

import sprite1 from '../../../public/assets/sprite1/*'
import sprite2 from '../../../public/assets/sprite2/*'
import sprite4 from '../../../public/assets/sprite4/*'

class PixiCanvas extends React.Component {

  componentDidMount() {
    // console.log(assets)
    // console.log(pixi)
    var app = new PIXI.Application(400, 400, {backgroundColor : 0x1099bb});
    this.refs.pixiContainer.appendChild(app.view);

    var graphics = new PIXI.Graphics();
    // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
    graphics.lineStyle(0);
    graphics.beginFill(0xFFFF0B, 0.5);
    graphics.drawCircle(200, 90,60);
    graphics.endFill();

    app.stage.addChild(graphics);
    console.log(graphics)

    // var texture = PIXI.Texture.fromVideo('required/assets/testVideo.mp4');
    var texture = PIXI.Texture.fromVideoUrl('https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4');
    var videoSprite = new PIXI.Sprite(texture);
     videoSprite.position.x = 200;
     videoSprite.position.y = 200;
     videoSprite.width = 200;
     videoSprite.height = 100;

     var filter = new PIXI.filters.ColorMatrixFilter();
     var blurFilter1 = new PIXI.filters.BlurFilter();
     // videoSprite.filters = [filter, blurFilter1];
     videoSprite.blendMode = PIXI.BLEND_MODES.MULTIPLY
     app.stage.addChild(videoSprite);


     var videoSprite2 = new PIXI.Sprite(texture);
     // videoSprite2.width = 200;
     // videoSprite2.height = 100;
     videoSprite2.rotate = 20;
     videoSprite2.width = app.screen.width;
     videoSprite2.height = app.screen.height;
     // videoSprite2.filters = [filter, blurFilter1];
     // videoSprite2.position.x = 100;
     // videoSprite2.position.y = 100;

     app.stage.addChild(videoSprite2);
     //app.screen.width

     var texture = PIXI.Texture.fromImage('http://pixijs.io/examples/required/assets/panda.png');
     var image1 = new PIXI.Sprite(texture);
     image1.position.x = 100
     image1.position.y = 100
     image1.width = 100
     image1.height = 100
     app.stage.addChild(image1);

     videoSprite2.mask = image1

    //  var texture = PIXI.Texture.fromImage(require('../../../public/assets/1.png'));
    //  let sprite = new PIXI.Sprite(texture);
    // console.log(sprite)
    // sprite.position.x = 100
    // sprite.position.y = 100
    // sprite.width = 100
    // sprite.height = 100
    // app.stage.addChild(sprite);

    // explorer = new Sprite(
    //   resources[sprite1['1.json']].textures[sprite1['1.png']]
    // );

    // let lol = {}
    // let json = {...lol}
    // let json = cloneDeep(sprite1['1.json'])
    // console.log(json)
    // json.meta.image =  sprite1['1.png'].replace('/dist/','')
    // console.log(json)
    //
    // setTimeout(() => {
    //   PIXI.loader
    //   .add('spritesheet', json)
    //   .load(onAssetsLoaded);
    //
    //   function onAssetsLoaded() {
    //     console.log(PIXI.TextureCache)
    //     var explosionTextures = [],
    //             i;
    //
    //     console.log(PIXI.loader.resources)
    //     for (i = 0; i < 81; i++) {
    //          var texture = PIXI.Texture.fromFrame('1' + (i+1) + '.png');
    //          explosionTextures.push(texture);
    //     }
    //   }
    // }, 1000)


    // PIXI.loader
    // .add(sprite1['1.png'], sprite1['1.json'])
    // .add('spritesheet', sprite1['1.json'])
    // // .add('image', sprite1['1.png'])
    // // .add('spritesheet', sprite1['1.json'])
    // .load(onAssetsLoaded);
    //
    // function onAssetsLoaded() {
    //   // var sheet = PIXI.loader.resources.spritesheet;
    //   // sheet.data = PIXI.loader.resources.image.data
    //   // console.log(sheet.data)
    //   console.log(PIXI.loader.resources)
    //
    //   var explosionTextures = [],
    //         i;
    //   for (i = 0; i < 81; i++) {
    //        var texture = PIXI.Texture.fromFrame('1' + (i+1) + '.png');
    //        explosionTextures.push(texture);
    //   }
    // }




    // MANUAL IMPORT
    console.log(sprite4)

    let alienImages = []
    let baseurl = 'http://localhost:1234'
    each(sprite4, (i => alienImages.push(baseurl + i)))
    // let alienImages = [sprite2['1.png'],sprite2['2.png'],sprite2['3.png']];
    let textureArray = [];

    var texture2 = PIXI.Texture.fromImage('http://pixijs.io/examples/required/assets/panda.png');
    for (let i=0; i < alienImages.length; i++)
    {
         let texture = PIXI.Texture.fromImage(alienImages[i]);
         textureArray.push(texture);
    };
    console.log(textureArray)

    let mc = new PIXI.extras.AnimatedSprite(textureArray);

    // mc = new PIXI.Sprite(texture);
    console.log(mc)
    app.stage.addChild(mc);
    mc.position.x = 10
    mc.position.y = 200
    mc.width = 300
    mc.height = 300
    mc.play()

    mc.blendMode = PIXI.BLEND_MODES.SCREEN

    // mc.filters = [filter];


    // app.start()


    // console.log(sprite1)
    // PIXI.loader
    // .add('spritesheet', sprite1['1.json'])
    // .load(onAssetsLoaded);
    // function onAssetsLoaded() {
    //   // create an array to store the textures
    //   var explosionTextures = [],
    //       i;
    //
    //   for (i = 0; i < 81; i++) {
    //        var texture = PIXI.Texture.fromFrame('1' + (i+1) + '.png');
    //        explosionTextures.push(texture);
    //   }
    //
    //   console.log(explosionTextures)
    //
    //   for (i = 0; i < 81; i++) {
    //       // create an explosion AnimatedSprite
    //       var explosion = new PIXI.extras.AnimatedSprite(explosionTextures);
    //
    //       explosion.x = Math.random() * app.screen.width;
    //       explosion.y = Math.random() * app.screen.height;
    //       explosion.anchor.set(0.5);
    //       explosion.rotation = Math.random() * Math.PI;
    //       explosion.scale.set(0.75 + Math.random() * 0.5);
    //       explosion.gotoAndPlay(Math.random() * 27);
    //       app.stage.addChild(explosion);
    //   }
    // }





    let count = 0
    let count2 = 0
    let count3 = 0
    app.ticker.add(function() {

        count += 0.001;
        count2 += 1;
        count3 += 0.01;
        // graphics.rotation = count
        image1.rotation = count3
        videoSprite2.rotation = -count
    });
    app.ticker.add(function() {
        var matrix = filter.matrix;
        matrix[1] = Math.sin(count3) * 3;
        matrix[2] = Math.cos(count3);
        matrix[3] = Math.cos(count3) * 1.5;
        matrix[4] = Math.sin(count3 / 3) * 2;
        matrix[5] = Math.sin(count3 / 2);
        matrix[6] = Math.sin(count3 / 4);

        var blurAmount = Math.cos(count3);
        blurFilter1.blur = 20 * (blurAmount);
        // videoSprite.rotation = count
        // videoSprite.position.x = count2


    });
  }

  render() {
    return (
      <div className="c-pixi">
        hello from pixifdsafds fsdafdsfd dsadasads
        <div ref="pixiContainer" className="pixi-container"></div>
      </div>
    )
  }
}

export default PixiCanvas
