window.App = window.App || {}

var Apple = App.Apple = function (size) {
  this.pos = this.startPos(size);
}

Apple.prototype.startPos = function (size) {
  var pos = [];

  pos[0] = Math.floor(Math.random() * 10);
  pos[1] = Math.floor(Math.random() * 10);

  return pos;
}
