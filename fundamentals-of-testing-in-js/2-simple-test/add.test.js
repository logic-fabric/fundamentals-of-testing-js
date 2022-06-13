// Code to test:
function add(a, b) {
  return a - b; // <-- mistak that will be catch by the test
}

// Test suite:
console.log("===");
console.log("TEST SUITE for add(a, b):");

// Test:
console.log("  > TEST: add 3 and 4:");

const expected = 7;
const output = add(3, 4);

if (output === expected) {
  console.log("    > PASS");
} else {
  console.log("    > FAIL");

  const error = `    > Expected ${expected}, got ${output}`;
  console.error(error);

  console.log("---");
  console.log("Error traceback:");
  console.log("---");

  throw new Error();
}
