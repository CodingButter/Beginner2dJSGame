/*!
 * TileLoader
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
define(['Tile','GrassTile','DirtTile','StoneTile'],function(Tile,GrassTile,DirtTile,StoneTile){
    Tile.grassTile = new GrassTile(0);
    Tile.dirtTile = new DirtTile(1);
    Tile.stoneTile = new StoneTile(2);
    return Tile;
});