window.App = window.App || {}

var Snake = App.Snake = function (rows) {
  this.pos = [0, 0];
  this.length = 1;
  this.body = [];
  this.delta = [1, 0];
  this.bindKeys();
  this.size = size;
}

Snake.prototype.advance = function () {
  this.body.push(this.pos);
  this.pos[0] = this._wrapPos(this.pos[0], this.delta[0]);
  this.pos[1] = this._wrapPos(this.pos[1], this.delta[1]);
}

Snake.prototype.bindKeys = function () {
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

Snake.prototype.render = function () {
  var row = document.getElementById(this.pos[0]);
  var square = row.getElementsByClassName("col-" + this.pos[1])[0];
  square.classList.add("snake");
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

