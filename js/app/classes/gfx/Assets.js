/*!
 * Assets
 * Version: 1.0.0
 * Date: 2015/08/27
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 *
 * Description
 * 
 *
 * Dependencies
 * 
 */
define(['Class','ImageLoader','SpriteSheet'],function(Class,ImageLoader,SpriteSheet){
    var DEFAULT_WIDTH = 32,DEFAULT_HEIGHT = 32;
    var assets = {};

    var Assets = Class.extend({
        init: function (_name, _path, _width, _height) {
            assets[_name] = this;
            this.name = _name;
            this.path = _path;
            this.width = _width;
            this.height = _height;
            this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
        }
    });

    Assets.DEFAULT_WIDTH = DEFAULT_WIDTH;
    Assets.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
    Assets.getAssets = function(_name){
        return assets[_name];
    };

    //Player asset
    var player  = new Assets("player","res/textures/mario.png",28,42);
    player.idle = player.sheet.crop(3,0,28,42);

    //Tile Asset
    var tiles = new Assets("tiles","res/textures/tiles.png",30,30);
    tiles.dirt = tiles.sheet.crop(0,tiles.height*10,tiles.width,tiles.height);
    tiles.grass = tiles.sheet.crop(0,tiles.height,tiles.width,tiles.height);
    tiles.stone = tiles.sheet.crop(0,tiles.height*7,tiles.width,tiles.height);

    return Assets;
});