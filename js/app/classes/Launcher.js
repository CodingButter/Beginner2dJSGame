/*!
 * Launcher
 * Version: 1.0.0
 * Date: 2015/08/26
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 */
define(['Class','Game'],function(Class,Game){

    var Launcher = Class.extend({
        init:function(_title,_width,_height){

            var game = new Game(_title,_width,_height);
            game.start();
        }
    });

    return Launcher;
});