define(['Class'],function(Class){
	var Animation = Class.extend({
		init:function(_frames){
			this.frames = _frames;
			this.index = 0;
			this.lastTime = Date.now();
			this.timer = 0;
			this.speed;
		},
		tick:function(){
			this.timer += Date.now() - this.lastTime;
			this.lastTime = Date.now();
			
			if(this.timer >= this.speed){
				this.index++;
				this.timer = 0;
				if(this.index>=this.frames.length)
					this.index = 0;
			}
		},
		getCurrentFrame:function(){
			this.speed = this.frames[this.index].speed;
			return this.frames[this.index].frame;
		}
	});
	
	return Animation;
});