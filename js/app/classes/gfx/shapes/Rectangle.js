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
 */
define(['Class'],function(Class){
  var Rectangle = Class.extend({
      init:function(_x,_y,_width,_height){
          this.x = _x;
          this.y = _y;
          this.width = _width;
          this.height = _height;
      },
      intersects:function(_rect){
          if(   this.x < _rect.x + _rect.width &&
                this.x + this.width > _rect.x &&
                this.y < _rect.y + _rect.height &&
                this.y + this.height> _rect.y){
              return true;
          }
          return false;
      }
  });


    return Rectangle;
});