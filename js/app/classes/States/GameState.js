/*!
 * GameState
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
define(['State','Player','World'],function(State,Player,World){
    var x = 0;
    var y = 0;
    var GameState = State.extend({
        init:function(_handler){
            this._super(_handler);
            this.player = new Player(_handler,20,20);
            this.world = new World("");
        },

        tick:function(_dt){
            this.world.tick(_dt);
            this.player.tick(_dt);
        },

        render:function(_g){
            this.world.render(_g);
            this.player.render(_g);

        }
    });

    return GameState;
});