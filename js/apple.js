window.App = window.App || {}

var Apple = App.Apple = function (game) {
  this.game = game;
}

Apple.prototype.startPos = function () {
  var len = this.game.board.rows;
  var pos = [];

  pos[0] = Math.floor(Math.random(len));
  pos[1] = Math.floor(Math.random(len));

  return pos;
}
