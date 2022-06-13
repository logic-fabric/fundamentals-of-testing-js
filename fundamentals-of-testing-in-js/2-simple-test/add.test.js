const { expect } = require("./assertions");

const { add } = require("./add");

// Test suite:
console.log("===");
console.log("TEST SUITE for:", add);

// Test that does not catch the mistake:
test__add(3, 0);

// Test that catches the mistatke:
test__add(3, 4);

// Test code:
function test__add(a, b) {
  console.log(`  > TEST: add ${a} and ${b}:`);

  const expected = a + b;
  const output = add(a, b);

  expect(output).toBe(expected);
}
