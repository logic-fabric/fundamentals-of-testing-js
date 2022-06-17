const thumbWar = require("../thumbWar");
const utils = require("../utils");

test("Test thumbWar", () => {
  jest.spyOn(utils, "getWinner");

  // Monkey patching with Jest:
  utils.getWinner.mockImplementation((p1, p2) => p2);

  const winner = thumbWar("Alicia", "Bobby");

  // Check thumbWar() final output:
  expect(winner).toBe("Bobby");

  // Check if getWinner() has been called as expected:
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith("Alicia", "Bobby");

  // Restore the original function:
  utils.getWinner.mockRestore();
});
