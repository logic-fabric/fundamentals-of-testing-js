// Test wrapper:
function test(description, callback) {
  console.log("  > TEST:", description);
  console.log("    ----");

  try {
    callback();
    console.log("    > PASS");
  } catch (error) {
    console.error("    > FAIL:", error);
  } finally {
    console.log("    ----");
  }
}

// Vanilla assertion library:
function expect(output) {
  return {
    toBe: (expected) => {
      if (output === expected) {
        return;
      }

      throw new Error(`Expected ${output} to be ${expected}`);
    },

    toEqual: (expected) => {
      if (output == expected) {
        return;
      }

      throw new Error(`Expected ${output} to equal ${expected}`);
    },
  };
}

module.exports = { expect, test };
