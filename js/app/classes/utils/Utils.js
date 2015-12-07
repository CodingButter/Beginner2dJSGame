/*!
 * Utils
 * Version: 1.0.0
 * Date: 2015/09/01
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 */
define(['Jquery'],function($){
    var Utils = {};
    Utils.loadFileAsString = function(_path){
        var string = "";
        $.ajax({
            url:_path,
            type:"get",
            async: false,
            success:function(_contents){
                string = _contents;
            },
            error:function(){
                alert("file:'"+_path+" can not be loaded");
            }
        });
        return string;
    };

    return Utils;
});