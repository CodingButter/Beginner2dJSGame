/*!
 * State
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

    var currentState = null;

    var State = Class.extend({
        init:function(_handler){
            this.handler = _handler;
        },
        tick:function(_dt){
            throw("Every state needs a tick");
        },
        render:function(_g){
            throw("Every state needs a render");
        },
        click:function(){
            throw("Every state need a click");
        },
    });
    State.getState = function(){
        return currentState;
    };
    State.setState = function(_state){
        currentState = _state;
    };

    return State;
});