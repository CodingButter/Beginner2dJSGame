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

    var ast = new Assets("mario","res/textures/mario.png",28,42);
    ast.idle = ast.sheet.crop(3,0,28,42);


    return Assets;
});