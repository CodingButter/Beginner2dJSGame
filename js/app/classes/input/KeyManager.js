/*!
 * KeyManager
 * Version: 1.0.0
 * Date: 2015/08/29
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com 
 */
define(['Class'],function(Class){

    var keys = [];

    var KeyManager = Class.extend({
        init:function(){},
        tick:function(){
        this.up = keys[87];
        this.down = keys[83];
        this.left = keys[65];
        this.right = keys[68];
        }
    });
    window.onkeydown = function(e){
        keys[e.keyCode] = true;
    };
    window.onkeyup = function(e){
        keys[e.keyCode] = false;
    };

    return KeyManager;
});