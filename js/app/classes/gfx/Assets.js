/*!
 * Assets
 * Version: 1.0.0
 * Date: 2015/08/27
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
define(['Class','ImageLoader','SpriteSheet','Animation'],function(Class,ImageLoader,SpriteSheet,Animation){
    var DEFAULT_WIDTH = 32,DEFAULT_HEIGHT = 32;
    var assets = {};

    var Assets = Class.extend({
        init: function (_name, _path, _width, _height) {
            assets[_name] = this;
            this.name = _name;
            this.path = _path;
            this.width = _width;
            this.height = _height;
            this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
            this.animations = {};
        },
        addAnimation:function(_name,_animation){
            this.animations[_name] = _animation;
        }
    });

    Assets.DEFAULT_WIDTH = DEFAULT_WIDTH;
    Assets.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
    Assets.getAssets = function(_name){
        return assets[_name];
    };

    //Player asset
    var player  = new Assets("player","res/textures/link.png",120,130);

    //Add animations

    //Walk Right
    var frameduration = 30;
    var walkrightframes = [];
    var walkleftframes = [];
    var walkupframes = [];
    var walkdownframes = [];
    var wrindex = 7;
    var wlindex = 5;
    var wuindex = 6;
    var wdindex = 4;
    for(var i = 0;i<10;i++){
        var wrframe = {frame:player.sheet.crop(player.width * i, player.height * wrindex, player.width, player.height), speed:frameduration};
        var wlframe = {frame:player.sheet.crop(player.width * i, player.height * wlindex, player.width, player.height), speed:frameduration};
        var wuframe = {frame:player.sheet.crop(player.width * i, player.height * wuindex, player.width, player.height), speed:frameduration};
        var wdframe = {frame:player.sheet.crop(player.width * i, player.height * wdindex, player.width, player.height), speed:frameduration};

        walkrightframes.push(wrframe);
        walkleftframes.push(wlframe);
        walkupframes.push(wuframe);
        walkdownframes.push(wdframe);
    }

    var idleframes = [
        {frame:player.sheet.crop(0,0,player.width, player.height), speed:frameduration*80},
        {frame:player.sheet.crop(player.width * 1,0, player.width, player.height), speed:frameduration},
        {frame:player.sheet.crop(player.width * 2,0, player.width, player.height), speed:frameduration}
    ];
    //add Animation
    player.addAnimation("walk_right",new Animation(walkrightframes));
    player.addAnimation("walk_left",new Animation(walkleftframes));
    player.addAnimation("walk_up",new Animation(walkupframes));
    player.addAnimation("walk_down",new Animation(walkdownframes));
    player.addAnimation("idle",new Animation(idleframes));

    //Tile Asset
    var tiles = new Assets("tiles","res/textures/tiles.png",30,30);
    tiles.dirt = tiles.sheet.crop(0,tiles.height*10,tiles.width,tiles.height);
    tiles.grass = tiles.sheet.crop(0,tiles.height,tiles.width,tiles.height);
    tiles.stone = tiles.sheet.crop(0,tiles.height*7,tiles.width,tiles.height);

    return Assets;
});