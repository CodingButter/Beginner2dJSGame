/*!
 * GameCamera
 * Version: 1.0.0
 * Date: 2015/09/01
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
    var xOffset,yOffset,handler;
    var GameCamera = Class.extend({
        init:function(_handler,_xOffset,_yOffset){
            xOffset = _xOffset;
            yOffset = _yOffset;
            handler = _handler;
        },
        centerOnEntity:function(e){
            xOffset = e.getX() - handler.getWidth()/2 + e.getWidth()/2;
            yOffset = e.getY() - handler.getHeight()/2 + e.getHeight()/2;
        },
        move:function(_xAmt,_yAmt){
            xOffset += _xAmt;
            yOffset += _yAmt;
        },
        //Getters
        getxOffset:function(){
            return parseInt(xOffset);
        },
        getyOffset:function(){
            return parseInt(yOffset);
        },
        //Setters
        setxOffset:function(_offset){
            xOffset = _offset;
        },
        setyOffset:function(_offset){
            yOffset = _offset;
        }
    });

    return GameCamera;

});