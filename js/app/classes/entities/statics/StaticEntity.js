define(['Entity'],function(Entity){
	
	var StaticEntity = Entity.extend({
		init:function(_handler,_x,_y,_width,_height){
			this._super(_handler,_x,_y,_width,_height);
		}
	});
	
	return StaticEntity;
	
});