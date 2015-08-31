/*!
 * app
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
requirejs.config({
    "baseUrl":"js",
    "paths":{
        //Libs
        "Class":"libs/class",
        "Jquery":"libs/jquery",
        //Classes
        "Assets":"app/classes/gfx/Assets",
        "Creature":"app/classes/entities/creatures/Creature",
        "DirtTile":"app/classes/tiles/DirtTile",
        "Display":"app/classes/display/Display",
        "Entity":"app/classes/entities/Entity",
        "Game":"app/classes/Game",
        "GameState":"app/classes/states/GameState",
        "GrassTile":"app/classes/tiles/GrassTile",
        "Handler":"app/classes/Handler",
        "ImageLoader":"app/classes/gfx/ImageLoader",
        "KeyManager":"app/classes/input/KeyManager",
        "Launcher":"app/classes/Launcher",
        "Player":"app/classes/entities/creatures/Player",
        "SpriteSheet":"app/classes/gfx/SpriteSheet",
        "State":"app/classes/states/State",
        "StoneTile":"app/classes/tiles/StoneTile",
        "Tile":"app/classes/tiles/Tile",
        "TileLoader":"app/classes/tiles/TileLoader"
    }
});

require(['app/main']);