/*!
 * Game
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
define(['Class','Display','State','GameState','KeyManager','Handler'],function(Class,Display,State,GameState,KeyManager,Handler){

    var _this;
    var running = false;
    var title,width,height,g,display,keyManager,handler;
    var gameState,menuState,settingsState;

    var Game = Class.extend({
        init:function(_title,_width,_height){
            _this = this;
            title = _title;
            width = _width;
            height = _height;
            keyManager = new KeyManager();
        }
    });

    function init(){
        display = new Display(title,width,height)
        g = display.getGraphics();
        handler = new Handler(_this);
        gameState = new GameState(handler);
        State.setState(gameState);
    }
    function tick(_dt) {
        keyManager.tick();
        if(State.getState()!=null){
            State.getState().tick(_dt);
        }
    }
    function render(){
        g.clearRect(0,0,width,height);
        if(State.getState()!=null){
            State.getState().render(g);
        }
    }

    Game.prototype.run = function(){
        init();
        var fps = 30;
        var timePerTick = 1000/fps;
        var delta = 0;
        var now;
        var lastTime = Date.now();
        var timer = 0;
        var ticks = 0;
        function loop(){
            if(running){
                now = Date.now();
                delta = now - lastTime;
                timer += delta;
                lastTime = now;
            }
            if(timer>=timePerTick){
                dt = timer/1000;
                tick(dt);
                render();
                timer = 0;
            }
            window.requestAnimationFrame(loop);
        }
        loop();
    };

    Game.prototype.start = function(){
        if(running)return;
        running = true;
        this.run();
    };


    Game.prototype.getKeyManager = function(){
        return keyManager;
    }

    Game.prototype.getWidth = function(){
        return width;
    };

    Game.prototype.getHeight = function(){
        return height;
    };

    return Game;
});