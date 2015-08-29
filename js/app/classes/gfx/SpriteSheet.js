/*!
 * SpriteSheet
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
define(['Class'],function(Class){

    var SpriteSheet = Class.extend({
        init:function(_sheet){
            this.sheet = _sheet;
        }
    });
    SpriteSheet.prototype.crop = function(_x,_y,_width,_height){
        return {"sheet":this.sheet,"x":_x,"y":_y,"width":_width,"height":_height};
    };

    return SpriteSheet;

});