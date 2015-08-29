/*!
 * ImageLoader
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
define(function(){
    var ImageLoader = {};

    ImageLoader.loadImage = function(_path){
        var image = new Image();
        image.src = _path;
        return image;
    }
    return ImageLoader;
});