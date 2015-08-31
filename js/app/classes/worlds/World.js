/*!
 * World
 * Version: 1.0.0
 * Date: 2015/08/31
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
define(['Class','TileLoader'],function(Class,Tile){

    var World = Class.extend({
        init:function(_path){
            this.tiles = [];
            this.width = 10;
            this.height = 10;
            this.loadWorld(_path);

        },
        loadWorld:function(_path){
            for(x=0;x<this.width;x++){
                for(y=0;y<this.height;y++){
                    if(!this.tiles[x])
                        this.tiles[x] = [];
                    this.tiles[x][y] = 2;
                }
            }
        },
        tick:function(_dt) {

        },
        render:function(_g){
            for(y=0;y<this.height;y++){
                for(x=0;x<this.width;x++){
                    this.getTile(x,y).render(_g,x * Tile.TILEWIDTH,y * Tile.TILEHEIGHT);
                }
            }
        },
        getTile:function(x,y){
            return Tile.tiles[this.tiles[x][y]];
        }

    });

    return World;

});