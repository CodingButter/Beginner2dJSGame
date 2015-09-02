/*!
 * Rectangle
 * Version: 1.0.0
 * Date: 2015/09/02
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
define(['Class'],function(Class){
  var Rectangle = Class.extend({
      init:function(_x,_y,_width,_height){
          this.x = _x;
          this.y = _y;
          this.width = _width;
          this.height = _height;
      }
  });

    return Rectangle;
});