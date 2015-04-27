window.App = window.App || {}

var Game = App.Game = function (mount) {
  this.el = mount;
  this.size = 10;
  this.board = new App.Board(this.size);
  this.snake = new App.Snake(size);
  this.apple = new App.Apple(this);
}

Game.prototype.start = function () {
  this.renderBoard();

  setInterval( function () {
    this.advanceGame();
  }.bind(this), 600);
}

Game.prototype.advanceGame = function () {
  this.snake.advance();
  this.snake.render();
}

Game.prototype.renderBoard = function () {
  this.el.appendChild(this.board.board);
}
