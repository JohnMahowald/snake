window.App = window.App || {}

var Board = App.Board = function (rows) {
  this.rows = rows;
  this.board = this.generateBoard();
  this.squares = document.getElementsByClassName("square");
  this.apples = [];
}

Board.prototype.generateCol = function (col_num) {
  var col = document.createElement("div");
  col.classList.add("col-" + col_num);
  col.classList.add("square");
  return col
}

Board.prototype.generateRow = function (row_num) {
  var row = document.createElement("div");
  row.id = row_num;
  row.classList.add("row");

  for (var i = 0; i < this.rows; i ++) {
    row.appendChild(this.generateCol(i))
  }

  return row;
}

Board.prototype.generateBoard = function() {
  var board = document.createElement("div");
  board.classList.add("board")

  for (var i = 0; i < this.rows; i ++) {
    board.appendChild(this.generateRow(i))
  }

  return board
}

Board.prototype.clearBoard = function () {
  for (var i = 0; i < this.squares.length; i ++) {
    this.squares[i].classList.remove("snake");
  }
}
