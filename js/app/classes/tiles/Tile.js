/*!
 * Tile
 * Version: 1.0.0
 * Date: 2015/08/30
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 */
define(['Class','Assets'],function(Class,Assets){

    var TILEWIDTH = 32;
    var TILEHEIGHT = 32;

    var tiles = [];

    var Tile = Class.extend({
        init:function(_texture,_id){
            this.texture = _texture;
            this.id = _id;
            tiles[_id] = this;
        },
        tick:function(_dt){
        },
        render:function(_g,_x,_y){
            _g.myDrawImage(this.texture,_x,_y,TILEWIDTH,TILEHEIGHT);
        },
        getId:function(){
            return this.id;
        },
        isSolid:function(){
            return false;
        }
    });

    Tile.tiles = tiles;
    Tile.TILEWIDTH = TILEWIDTH;
    Tile.TILEHEIGHT = TILEHEIGHT;
    Tile.assets = Assets.getAssets("tiles");

    return Tile;
});