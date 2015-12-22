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
		"Animation":"app/classes/gfx/Animation",
        "Assets":"app/classes/gfx/Assets",
        "Astar":"app/classes/utils/Astar",
        "Creature":"app/classes/entities/creatures/Creature",
        "DirtTile":"app/classes/tiles/DirtTile",
        "Display":"app/classes/display/Display",
        "Entity":"app/classes/entities/Entity",
        "EntityManager":"app/classes/entities/EntityManager",
        "Game":"app/classes/Game",
        "GameCamera":"app/classes/gfx/GameCamera",
        "GameState":"app/classes/states/GameState",
        "GrassTile":"app/classes/tiles/GrassTile",
        "Handler":"app/classes/Handler",
        "ImageLoader":"app/classes/gfx/ImageLoader",
        "KeyManager":"app/classes/input/KeyManager",
        "Launcher":"app/classes/Launcher",
        "MouseManager":"app/classes/input/MouseManager",
        "Player":"app/classes/entities/creatures/Player",
        "Rectangle":"app/classes/gfx/shapes/Rectangle",
        "SpatialGrid":"app/classes/utils/SpatialGrid",
        "SpriteSheet":"app/classes/gfx/SpriteSheet",
        "State":"app/classes/states/State",
		"StaticEntity":"app/classes/entities/statics/StaticEntity",
		"StoneTile":"app/classes/tiles/StoneTile",
        "Tile":"app/classes/tiles/Tile",
        "TileLoader":"app/classes/tiles/TileLoader",
		"Tree":"app/classes/entities/statics/Tree",
		"Utils":"app/classes/utils/Utils",
        "World":"app/classes/worlds/World"
    }
});

require(['app/main']);