/*!
 * Display
 * Version: 1.0.0
 * Date: 2015/08/26
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
define(['Jquery','Class'],function($,Class){
    //Private Variables
    var canvas,title,width,height,graphics;

    var Display = Class.extend({
        init:function(_title,_width,_height){
            title = _title;
            width = _width;
            height = _height;
            createDisplay();
        }
    });

    //Private Method
    function createDisplay(){
        document.title = title;
        var body = document.body;
        body.innerHTML = ("<canvas id='canvas' width='"+width+"' height='"+height+"'></canvas>");
        graphics = document.getElementById("canvas").getContext("2d");

    }

    //Getters
    Display.prototype.getTitle = function(){
        return title;
    };
    Display.prototype.getWidth = function(){
        return width;
    };
    Display.prototype.getHeight = function(){
        return height;
    };
    Display.prototype.getGraphics = function(){
        return graphics;
    };

    CanvasRenderingContext2D.prototype.myDrawImage = function(asset,_x,_y,_width,_height){
        this.drawImage(asset.sheet,
            asset.x,asset.y,
            asset.width,asset.height,
            _x,_y,_width,_height);
    };

    return Display;
});