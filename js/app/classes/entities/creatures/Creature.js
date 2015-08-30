/*!
 * Creature
 * Version: 1.0.0
 * Date: 2015/08/30
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
define(['Entity'],function(Entity){

    var DEFAULT_SPEED = 250,
        DEFAULT_HEALTH = 10,
        DEFAULT_CREATURE_WIDTH = 64,
        DEFAULT_CREATURE_HEIGHT = 64;

    var Creature = Entity.extend({
        init:function(_handler,_x,_y,_width,_height){
            this._super(_handler,_x,_y,_width,_height);
            this.health = DEFAULT_HEALTH;
            this.speed = DEFAULT_SPEED;
            this.xMove = 0;
            this.yMove = 0;
        },
        move:function(){
            this.moveX();
            this.moveY();
        },
        moveX:function(){
            this.x+=this.xMove;
        },
        moveY:function(){
            this.y+=this.yMove;
        },
        //Getters
        getHealth:function(){
            return this.health;
        },
        getSpeed:function(){
            return this.speed;
        },
        //Setters
        setHealth:function(_health){
            this.health = _health;
        },
        setSpeed:function(_speed){
            this.speed = _speed;
        }
    });

    //Static Variables
    Creature.DEFAULT_SPEED = DEFAULT_SPEED;
    Creature.DEFAULT_HEALTH = DEFAULT_HEALTH;
    Creature.DEFAULT_CREATURE_WIDTH = DEFAULT_CREATURE_WIDTH;
    Creature.DEFAULT_CREATURE_HEIGHT = DEFAULT_CREATURE_HEIGHT;

    return Creature;

});