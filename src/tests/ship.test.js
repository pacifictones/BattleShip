const Ship = require("../ship");

test("Test Ships sets length", () => {
  const smallShip = new Ship(2);

  expect(smallShip.length).toEqual(2);
});

test("Test Ships isSunk method", () => {
  const smallShip = new Ship(2);
  smallShip.hits = 2;

  expect(smallShip.isSunk()).toBe(true);
});

test("Test Ships hit method", () => {
  const smallShip = new Ship(2);

  expect(smallShip.hit()).toEqual(1);
});
