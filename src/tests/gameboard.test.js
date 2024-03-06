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
  const newBoard = new Gameboard();
  newBoard.placeShip(2, 0, 1, 2);
  newBoard.receiveAttack(0, 1);

  expect(newBoard.board[0][1]).toBe("hit");
});

test("Test receiveAttack incrementing hits", () => {
  const newBoard = new Gameboard();
  newBoard.placeShip(2, 0, 1, 2);
  newBoard.receiveAttack(0, 1);

  expect(newBoard.ships[0].newShip.hits).toBe(1);
});

test("Test Gameboard is receiveAttack miss is working", () => {
  const newBoard = new Gameboard();
  newBoard.placeShip(2, 0, 1, 2);
  newBoard.receiveAttack(2, 1);

  expect(newBoard.board[2][1]).toBe("miss");
});

test("Test receiveAttack runs hit method on appropriate ship", () => {
  const newBoard = new Gameboard();
  newBoard.placeShip(2, 0, 1, 2);
  newBoard.receiveAttack(0, 1);

  expect(newBoard.ships[0].newShip.hits).toEqual(1);
});
