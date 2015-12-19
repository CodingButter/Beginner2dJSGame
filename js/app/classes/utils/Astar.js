/**
 * Created by Jamie Nichols on 12/10/2015.
 */
define(['Class', 'Tile'], function (Class, Tile) {
    //Define Private Variables
    var handler;
    var Astar = Class.extend({
        init: function (_handler, _size, _start, _goal) {
            handler = _handler;
            this.size = _size;
            this.width = parseInt((handler.getWorld().getWidth() * Tile.TILEWIDTH) / this.size);
            this.height = parseInt((handler.getWorld().getHeight() * Tile.TILEHEIGHT) / this.size);
            this.start = {
                x: parseInt((_start.x + _start.bounds.x) / this.size),
                y: parseInt((_start.y + _start.bounds.y) / this.size)
            };
            this.goal = {x: parseInt(_goal.x / this.size), y: parseInt(_goal.y / this.size)};
            this.closed = new Array();
            this.opened = new Array();
            this.grid = new Array();
            this.pathfound = false;
            this.path = new Array();
            _start.astar = this;
            this.buildGrid();
        },
        //Create this.grid array
        buildGrid: function () {
            for (var i = 0; i < this.width; i++) {
                if (!this.grid[i])this.grid[i] = [];
                for (var j = 0; j < this.height; j++) {
                    var def_node = {x: null, y: null, obs: false, parent: null, start: false, goal: false};
                    def_node.obs = (this.isObs(i, j)) ? true : false;
                    def_node.x = i;
                    def_node.y = j;
                    def_node.gcost = 0;
                    def_node.fcost = 0;
                    def_node.heur = getHeuristic(i, j,this.goal);
                    if (def_node.x == this.start.x && def_node.y == this.start.y) {
                        def_node.start = true;
                        this.opened.push(def_node);
                    }
                    if (def_node.x == this.goal.x && def_node.y == this.goal.y) {
                        def_node.goal = true;
                    }
                    this.grid[i][j] = def_node;

                }
            }
        },
        isObs: function (x, y) {
            var startX = Math.max(0, parseInt((x * this.size) / Tile.TILEWIDTH));
            var endX = Math.min(parseInt(handler.getWorld().getWidth()), parseInt(((x * this.size) + this.size) / Tile.TILEWIDTH));
            var startY = Math.max(0, parseInt((y * this.size) / Tile.TILEHEIGHT));
            var endY = Math.min(parseInt(handler.getWorld().getHeight()), parseInt(((y * this.size) + this.size) / Tile.TILEHEIGHT));

            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    if (handler.getWorld().getTile(i, j).isSolid()) {
                        return true;
                    }
                }
            }
            return false;
        },
        findPath: function () {
            this.opened = this.opened.sort(function (a, b) {
                if (a.fcost < b.fcost)return -1;
                else return 1;
            });
            var opened = this.opened;
            var lowests = this.opened.filter(function (obj) {
                return obj.fcost == opened[0].fcost;
            });

            lowests = lowests.sort(function (a, b) {
                if (a.heur < b.heur)return -1;
                else return 1;
            });
            var current = lowests[0];
            this.opened.splice(this.opened.indexOf(current), 1);


            this.closed.push(current);
            if (!current.goal) {
                for (i = current.x - 1; i <= current.x + 1; i++) {
                    for (j = current.y - 1; j <= current.y + 1; j++) {
                        if (this.grid[i]) {
                            if (this.grid[i][j]) {
                                var neighbor = this.grid[i][j];
                                if (neighbor != current && neighbor.obs != true && !containsObject(neighbor, this.closed)) {
                                    var gcost = getGCost(current, neighbor);
                                    var tmpfcost = current.fcost + neighbor.heur + gcost;
                                    if (containsObject(neighbor, this.opened)) {
                                        if (neighbor.fcost > tmpfcost) {
                                            neighbor.parent = current;
                                            neighbor.gcost = gcost;
                                            neighbor.fcost = getFCost(neighbor);
                                        }
                                    }
                                    else {
                                        this.opened.push(neighbor);
                                        neighbor.parent = current;
                                        neighbor.gcost = gcost;
                                        neighbor.fcost = getFCost(neighbor);
                                    }
                                }
                            }
                        }
                    }
                }
                //var t = this;
                //setTimeout(function(){t.findPath()}, 0);
                this.findPath();
            } else {
                this.path = [];
                this.tracePath(current);
            }
        },
        //Loop through parents adding them to the path array
        tracePath: function (node) {
            this.pathfound = true;
            var hasParent = true;
            var current = node;
            this.path.push(current);
            while (hasParent) {
                current.ispath = true;
                if (current.parent)
                    current = current.parent;
                else hasParent = false;
            }
        },
        renderPath: function (_g) {
            for (var i = 0; i < this.width; i++) {
                for (var j = 0; j < this.height; j++) {
                    if (this.grid[i][j].ispath) {
                        _g.fillStyle = "orange";
                        _g.fillRect(i * this.size - handler.getGameCamera().getxOffset(), j * this.size - handler.getGameCamera().getyOffset(), this.size, this.size);
                    }
                }
            }
        },
        render: function (_g) {

            if (!this.pathfound) {
               for(var i = 0;i<this.closed.length;i++){
                   var node = this.closed[i];
                    _g.fillStyle = "red";
                    _g.fillRect(node.x * this.size - handler.getGameCamera().getxOffset(), node.y * this.size - handler.getGameCamera().getyOffset(), this.size, this.size);
                }
                for(var i = 0;i<this.opened.length;i++){
                    var node = this.opened[i];
                    _g.fillStyle = "grey";
                    _g.fillRect(node.x * this.size - handler.getGameCamera().getxOffset(), node.y * this.size - handler.getGameCamera().getyOffset(), this.size, this.size);
                }
            }

            for (var i = 0; i < this.width; i++) {
                for (var j = 0; j < this.height; j++) {
                    _g.strokeStyle = (this.grid[i][j].obs) ? "white" : "black";
                    if (this.grid[i][j].start) {
                        _g.fillStyle = "blue";
                        _g.fillRect(i * this.size - handler.getGameCamera().getxOffset(), j * this.size - handler.getGameCamera().getyOffset(), this.size, this.size);

                    }
                    if (this.grid[i][j].goal) {
                        _g.fillStyle = "yellow";
                        _g.fillRect(i * this.size - handler.getGameCamera().getxOffset(), j * this.size - handler.getGameCamera().getyOffset(), this.size, this.size);
                    }
                    _g.strokeRect(i*this.size - handler.getGameCamera().getxOffset(),j*this.size - handler.getGameCamera().getyOffset(),this.size,this.size);
                    _g.fillStyle = "pink";
                    _g.font = 'italic 7pt Calibri';
                    _g.fillText(this.grid[i][j].heur, i * this.size - handler.getGameCamera().getxOffset(), (this.size / 2) + j * this.size - handler.getGameCamera().getyOffset());
                    _g.font = 'italic 7pt Calibri';
                    _g.fillText(this.grid[i][j].gcost, i * this.size + (this.size / 2) - handler.getGameCamera().getxOffset(), (this.size / 2) + j * this.size - handler.getGameCamera().getyOffset());
                    _g.font = 'italic 7pt Calibri';
                    _g.fillText(this.grid[i][j].fcost, i * this.size + (this.size / 3) - handler.getGameCamera().getxOffset(), (this.size / 1.2) + j * this.size - handler.getGameCamera().getyOffset());

                    if (this.grid[i][j].ispath) {
                        _g.fillStyle = "orange";
                        _g.fillRect(i * this.size - handler.getGameCamera().getxOffset(), j * this.size - handler.getGameCamera().getyOffset(), this.size, this.size);
                    }
                }
            }
            _g.font = "italic 20px Calibri";
            _g.fillStyle = "black";
            _g.fillRect(20 - handler.getGameCamera().getxOffset(),20 - handler.getGameCamera().getyOffset() , 120, 30);
            _g.fillStyle = "white";
            _g.fillText("checks:" + this.closed.length, 25 - handler.getGameCamera().getxOffset(),40 - handler.getGameCamera().getyOffset())
        },
        //Getters and Setters
        updateStart:function (x, y) {
            this.start = {x: parseInt(x / this.size), y: parseInt(y / this.size)};
            this.buildGrid();
            this.findPath();
        },
        updateGoal:function (x, y) {
            this.goal = {x: parseInt(x / this.size), y: parseInt(y / this.size)};
            this.buildGrid();
            this.findPath();
        },
        getPath:function () {
            return this.path;
        }
    });


    function getHeuristic(x, y, goal) {
        xdist = Math.abs(goal.x - x);
        ydist = Math.abs(goal.y - y);
        //return xdist + ydist;
        return getDistance({x: x, y: y}, goal);
    }

    function getDistance(a, b) {
        var distX = Math.abs(a.x - b.x);
        var distY = Math.abs(a.y - b.y);
        return parseInt(Math.sqrt(distX * distX + distY * distY) * 10);
    }

    function getGCost(current, neighbor) {
        return current.gcost + getDistance(current, neighbor);
    }

    //calculate F cost
    function getFCost(node) {
        return node.heur + node.gcost;
    }

    function containsObject(obj, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }

        return false;
    }

    return Astar;
})
    
