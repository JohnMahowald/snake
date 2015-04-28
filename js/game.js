window.App = window.App || {}

var Game = App.Game = function (mount) {
  this.el = mount;
  this.size = 10;
  this.apples = []
  this.board = new App.Board(this.size);
  this.snake = new App.Snake(this.size);
}

Game.prototype.start = function () {
  this.renderBoard();

  setInterval( function () {
    this.advanceGame();
  }.bind(this), 600);

  setInterval( function () {
    this.snake.extend();
  }.bind(this), 4000);

  setInterval( function () {
    this.addApple();
  }.bind(this), 1000);
}

Game.prototype.advanceGame = function () {
  this.board.clearBoard();
  this.snake.advance();
  this.snake.render();
  this.renderApples();
}

Game.prototype.renderBoard = function () {
  this.el.appendChild(this.board.board);
}

Game.prototype.addApple = function () {
  this.apples.push(new App.Apple(this.size));
}

Game.prototype.renderApples = function () {
  for (var i = 0; i < this.apples.length; i++) {
    this._renderPos(this.apples[i].pos);
  }
}

// Private

Game.prototype._renderPos = function (pos, className) {
  var row = document.getElementById(pos[0]);
  var square = row.getElementsByClassName("col-" + pos[1])[0];
  square.classList.add("apple");
}
