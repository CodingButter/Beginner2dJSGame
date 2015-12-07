/*!
 * StoneTile
 * Version: 1.0.0
 * Date: 2015/08/30
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 */
define(['Tile'],function(Tile){
    var StoneTile = Tile.extend({
        init:function(_id){
            this._super(Tile.assets.stone,_id);
        },
        isSolid:function(){
            return true;
        }
    });
    return StoneTile;
});