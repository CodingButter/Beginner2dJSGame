/*!
 * Handler
 * Version: 1.0.0
 * Date: 2015/08/29
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

    var game;

    var Handler = Class.extend({
        init:function(_game){
            game = _game;
        }
    });

    Handler.prototype.getWidth = function(){
        return game.getWidth();
    };
    Handler.prototype.getHeight = function(){
        return game.getHeight();
    };
    Handler.prototype.getKeyManager = function(){
        return game.getKeyManager();
    };

    return Handler;
});