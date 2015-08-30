/*!
 * Entity
 * Version: 1.0.0
 * Date: 2015/08/30
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


    var Entity = Class.extend({
        init:function(_handler,_x,_y,_width,_height) {
            this.x = _x;
            this.y = _y;
            this.width = _width;
            this.height = _height;
            this.handler = _handler;
        },
        tick:function(_dt){},
        render:function(_g){},

        //Getters
        getX:function(){
            return this.x;
        },
        getY:function(){
            return this.y;
        },
        getWidth:function(){
            return this.width;
        },
        getHeight:function(){
            return this.height;
        },

        //Setters
        setX:function(_x){
            this.x = _x;
        },
        setY:function(_y){
            this.y = _y;
        },
        setWidth:function(_width){
            this.width = _width;
        },
        setHeight:function(_height){
            this.height = _height;
        }
    });

    return Entity;
});