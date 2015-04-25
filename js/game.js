window.App = window.App || {}

var Game = App.Game = function (mount) {
  this.el = mount
  this.board = new App.Board(10);
}

Game.prototype.start = function () {
  this.renderBoard();
}

Game.prototype.renderBoard = function () {
  console.log(this.board.board);
  this.el.appendChild(this.board.board);
}
