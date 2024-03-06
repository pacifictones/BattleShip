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
      for (let i = 0; i < this.ships.length; i++) {
        for (let j = 0; j < this.ships[i].coords.length; j++) {
          if (
            JSON.stringify(this.ships[i].coords[j]) === JSON.stringify([y, x])
          ) {
            this.ships[i].newShip.hit();
            this.ships[i].newShip.isSunk();
          }
        }
      }
      this.board[y][x] = "hit";
      //   this.ships[0].newShip.hit();
    } else if (this.board[y][x] === null) {
      this.board[y][x] = "miss";
    }
  }
}

module.exports = Gameboard;
const board = new Gameboard();
board.placeShip(2, 0, 1, 1);
board.receiveAttack(0, 2);
board.receiveAttack(0, 1);
console.log(board.ships);
