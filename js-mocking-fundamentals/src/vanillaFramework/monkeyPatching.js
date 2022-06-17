const assert = require("assert");
const { test } = require("../../../fundamentals-of-testing-in-js/testing-lib");

const thumbWar = require("../thumbWar");
const utils = require("../utils");

test("Test thumbWar", () => {
  const originalGetWinner = utils.getWinner;

  // Monkey patching:
  utils.getWinner = (p1, p2) => p1;

  const winner = thumbWar("Alicia", "Bobby");

  assert.strictEqual(winner, "Alicia");

  // Restore the original function:
  utils.getWinner = originalGetWinner;
});
