window.App = window.App || {}

var Snake = App.Snake = function (size) {
  this.pos = [0, 0];
  this.length = 1;
  this.visited = [];
  this.delta = [1, 0];
  this._bindKeys();
  this.size = size;
}

Snake.prototype.advance = function () {
  this.pos[0] = this._wrapPos(this.pos[0], this.delta[0]);
  this.pos[1] = this._wrapPos(this.pos[1], this.delta[1]);
  this.visited.push(this.pos.slice(0));
  this._trimVisited();
}

Snake.prototype.render = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    this._renderPos(this.visited[i]);
  }
}

Snake.prototype.extend = function () {
  this.length += 1;
}

// Private

Snake.prototype._renderPos = function (pos) {
  var row = document.getElementById(pos[0]);
  var square = row.getElementsByClassName("col-" + pos[1])[0];
  square.classList.add("snake");
}

Snake.prototype._bindKeys = function () {
  window.onkeypress = function (e) {
    switch (e.keyCode) {
      case 104:
        this.delta = [0, -1];
        break;
      case 106: 
        this.delta = [1, 0];
        break;
      case 107:
        this.delta = [-1, 0];
        break;
      case 108:
        this.delta = [0, 1];
        break;
    }
  }.bind(this);
}

Snake.prototype._wrapPos = function (pos, delta) {
  if ((pos + delta) >= this.size) {
    return pos + delta - this.size;
  } else if ((pos + delta) < 0) {
    return pos + delta + this.size;
  } else {
    return pos + delta;
  }
}

Snake.prototype._trimVisited = function () {
  this.visited = this.visited.slice(this.visited.length - this.length, this.visited.length);
  console.log(this.visited);
}
