define(['StaticEntity','Assets','Tile'],function(StaticEntity,Assets,Tile){
	var assets = Assets.getAssets("tree");
	var Tree = StaticEntity.extend({
		init:function(_handler,_x,_y){
			this._super(_handler,_x,_y,Tile.TILEWIDTH * 5,Tile.TILEHEIGHT*5);
			this.bounds.x = 65;
			this.bounds.y = 52;
			this.bounds.width = this.bounds.height = 30;
		},
		tick:function(){},
		render:function(_g){
			_g.myDrawImage(assets.redwood,this.x - this.handler.getGameCamera().getxOffset(),
			this.y - this.handler.getGameCamera().getyOffset(),this.width,this.height);
		}
	});
	
	return Tree;
});