const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.ships = [];
    this.board = Array.from(Array(this.rows), () =>
      new Array(this.columns).fill(null),
    );
  }

  placeShip(len, y, x, direction) {
    const coords = [];
    const newShip = new Ship(len);
    for (let i = 0; i < len; i++) {
      this.board[y][x] = "ship";
      coords.push([y, x]);

      if (direction === 1) {
        x++;
      } else {
        y++;
      }
    }
    this.ships.push({ newShip, coords });
    return coords;
  }

  receiveAttack(y, x) {
    if (this.board[y][x] === "ship") {
      this.board[y][x] = "hit";
    }
  }
}

module.exports = Gameboard;
const board = new Gameboard();
board.placeShip(2, 0, 1);
console.log(board.ships);
console.log(board);
board.receiveAttack(0, 1);
console.log(board);
