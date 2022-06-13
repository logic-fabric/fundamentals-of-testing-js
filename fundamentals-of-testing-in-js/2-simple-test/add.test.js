const { add } = require("./add");

// Test suite:
console.log("===");
console.log("TEST SUITE for:", add);

// Test that does not catch the mistake:
test__add(3, 0);

// That that catches the mitsatke:
test__add(3, 4);

// Test code:
function test__add(a, b) {
  const expected = a + b;
  const output = add(a, b);

  console.log(`  > TEST: add ${a} and ${b}:`);

  if (output === expected) {
    console.log("    > PASS");
  } else {
    const error = `    > FAIL: Expected ${expected}, got ${output}`;

    console.error(error);

    console.log("---");
    console.log("Error traceback:");
    console.log("---");

    throw new Error();
  }
}
