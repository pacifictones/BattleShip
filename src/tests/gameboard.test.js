const Gameboard = require("../gameboard");

test("Test Gameboard is setting coordinates", () => {
  const board = new Gameboard();

  expect(board.placeShip(2, 0, 1, 1)).toEqual([
    [0, 1],
    [0, 2],
  ]);
});

test("Test Gameboard is setting direction", () => {
  const board = new Gameboard();

  expect(board.placeShip(2, 0, 1, 2, "patrol boat")).toEqual([
    [0, 1],
    [1, 1],
  ]);
});

test("Test Gameboard is receiveAttack is working", () => {
  const board = new Gameboard();
  board.placeShip(2, 0, 1, 2);

  expect(board.receiveAttack(0, 1)).toBe("hit");
});
