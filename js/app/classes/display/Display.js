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
        },
        //Getters
        getTitle:function(){
            return title;
        },
        getWidth:function(){
            return width;
        },
        getHeight:function(){
            return height;
        },
        getGraphics:function(){
            return graphics;
        },
        getCanvas:function(){
            return canvas;
        }
    });

    //Private Method
    function createDisplay(){
        document.title = title;
        var body = document.body;
        body.innerHTML = ("<canvas id='canvas' width='"+width+"' height='"+height+"'></canvas>");
        canvas = document.getElementById("canvas");
        graphics = canvas.getContext("2d");
    }

    CanvasRenderingContext2D.prototype.myDrawImage = function(asset,_x,_y,_width,_height){
        this.drawImage(asset.sheet,
            asset.x,asset.y,
            asset.width,asset.height,
            _x,_y,_width,_height);
    };

    return Display;
});