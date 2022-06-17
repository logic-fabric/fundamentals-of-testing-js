const thumbWar = require("../thumbWar");
const utilsMock = require("../utils");

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p2),
  };
});

test("Test thumbWar", () => {
  const winner = thumbWar("Alicia", "Bobby");

  // Check thumbWar() final output:
  expect(winner).toBe("Bobby");

  // Check if getWinner() has been called as expected:
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ["Alicia", "Bobby"],
    ["Alicia", "Bobby"],
  ]);

  // Restore the original function:
  utilsMock.getWinner.mockReset();
});
