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
define(['State','Assets'],function(State,Assets){

    var GameState = State.extend({
        init:function(_handler){
            this._super(_handler);
        }
    });
    var x = 0;
    var y = 0;

    GameState.prototype.tick = function(_dt){
        if(this.handler.getKeyManager().up){
            y-=50*_dt;
        }
        if(this.handler.getKeyManager().down){
            y+=50*_dt;
        }

        if(this.handler.getKeyManager().left){
            x-=50*_dt;
        }
        if(this.handler.getKeyManager().right){
            x+=50*_dt;
        }

    };

    GameState.prototype.render = function(_g){
        _g.myDrawImage(Assets.getAssets("mario").idle,x,y,Assets.getAssets('mario').width,Assets.getAssets('mario').height);
    };

    return GameState;
});