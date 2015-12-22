/*!
 * Player
 * Version: 1.0.0
 * Date: 2015/08/30
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 */
define(['Creature','Assets'],function(Creature,Assets){

    var Player = Creature.extend({
        init:function(_handler,_x,_y){
            this._super(_handler,_x,_y,Creature.DEFAULT_CREATURE_WIDTH,Creature.DEFAULT_CREATURE_HEIGHT);
			this.assets = Assets.getAssets("player");
            this.bounds.x = 16;
            this.bounds.y = 32;
            this.bounds.width = 25;
            this.bounds.height = 32;
            this.path = [];
            this.timeStopped = 0;
        },
        tick:function(_dt){
            //this.getInput(_dt);
            this.followPath(_dt);
            this.move();
            //this.handler.getGameCamera().centerOnEntity(this);
			this.assets.animations.walk_right.tick();
			this.assets.animations.walk_left.tick();
			this.assets.animations.walk_up.tick();
			this.assets.animations.walk_down.tick();
			this.assets.animations.idle.tick();
		},
        render:function(_g){
		    _g.myDrawImage(this.getCurrentAnimationFrame(),this.x - this.handler.getGameCamera().getxOffset(),this.y - this.handler.getGameCamera().getyOffset(),this.width,this.height);
        },
        click:function(_btn){
            if(_btn=="right"){
                var pos = this.handler.getMouseManager().getMousePosition();
                var waypoint = {x:pos.x + this.handler.getGameCamera().getxOffset() - this.width/2,y:pos.y + this.handler.getGameCamera().getyOffset() - this.height/2};
                this.path.push(waypoint);
            }
        },
        followPath:function(_dt){
            if(this.path.length>0){
                var path = this.path[0];

                if(this.getDistance(path)>=10 && this.timeStopped<.5){
                    if(this.getMovementSpeed()<.2){
                        this.timeStopped+=1*_dt;
                    }

                var angle = this.getAngleTo(path);
                this.xMove = (Math.cos(angle) * this.speed) * _dt;
                this.yMove = (Math.sin(angle) * this.speed) * _dt;
                }else{
                    this.timeStopped = 0;
                    this.path.splice(0,1);
                }
            }else{
                this.xMove = 0;
                this.yMove = 0;
            }
        },
        getInput:function(_dt) {
            this.xMove=0;
            this.yMove=0;
            if(this.handler.getKeyManager().up){
                this.yMove = -this.speed * _dt;
            }
            if(this.handler.getKeyManager().down){
                this.yMove = this.speed * _dt;
            }
            if(this.handler.getKeyManager().left){
                this.xMove = -this.speed * _dt;
            }
            if(this.handler.getKeyManager().right){
                this.xMove = this.speed * _dt;
            }

        },
		getCurrentAnimationFrame:function(){
			if(this.xMove<0 && Math.abs(this.xMove) > Math.abs(this.yMove)){
				return this.assets.animations.walk_left.getCurrentFrame();
			}
			else if(this.xMove>0 && Math.abs(this.xMove) > Math.abs(this.yMove)){
				return this.assets.animations.walk_right.getCurrentFrame();
			}else if(this.yMove<0 && Math.abs(this.xMove) < Math.abs(this.yMove)){
				return this.assets.animations.walk_up.getCurrentFrame();				
			}else if(this.yMove>0 && Math.abs(this.xMove) < Math.abs(this.yMove)){
				return this.assets.animations.walk_down.getCurrentFrame();				
			}else{
				return this.assets.animations.idle.getCurrentFrame();				
			}
		}
    });

    return Player;
});