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
 */
define(['State','World'],function(State,World){

    var GameState = State.extend({
        init:function(_handler){
            this._super(_handler);
            this.world = new World("res/worlds/world1.wrd",_handler);
        },
		tick:function(_dt){
            this.world.tick(_dt);
        },
		render:function(_g){
            this.world.render(_g);
        },
        click:function(_btn){
            this.world.click(_btn);
        }
    });

    return GameState;
});