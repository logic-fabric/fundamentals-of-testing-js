const thumbWar = require("../thumbWar");
const utils = require("../utils");

test("Test thumbWar", () => {
  const originalGetWinner = utils.getWinner;
  // Monkey patching with Jest:
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("Alicia", "Bobby");

  // Check thumbWar() final output:
  expect(winner).toBe("Alicia");

  // Check if getWinner() has been called as expected:
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith("Alicia", "Bobby");

  // Restore the original function:
  utils.getWinner = originalGetWinner;
});
