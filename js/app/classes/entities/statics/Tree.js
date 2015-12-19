define(['StaticEntity','Assets','Tile'],function(StaticEntity,Assets,Tile){
	var assets = Assets.getAssets("tree");
	var Tree = StaticEntity.extend({
		init:function(_handler,_x,_y){
			this._super(_handler,_x,_y,Tile.TILEWIDTH * 5,Tile.TILEHEIGHT*5);
			this.bounds.x = 45;
			this.bounds.y = 135;
			this.bounds.width = 60;
			this.bounds.height = 5;
		},
		tick:function(){},
		render:function(_g){
			_g.myDrawImage(assets.redwood,this.x - this.handler.getGameCamera().getxOffset(),
			this.y - this.handler.getGameCamera().getyOffset(),this.width,this.height);
		}
	});
	
	return Tree;
});