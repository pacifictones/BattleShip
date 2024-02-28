const Ship = require("./ship");

test("Test Ships methods", () => {
  const smallShip = new Ship(2);

  expect(smallShip.length).toEqual(2);
});
