// Vanilla assertion library
function expect(output) {
  return {
    toBe: (expected) => {
      if (output === expected) {
        console.log("    > PASS");
        return;
      }

      console.error(`    > FAIL: Expected ${output} to be ${expected}`);
      showTraceback();
    },

    toEqual: (expected) => {
      if (output == expected) {
        console.log("    > PASS");
        return;
      }

      console.error(`    > FAIL: Expected ${output} to equal ${expected}`);
      showTraceback();
    },
  };
}

const showTraceback = () => {
  console.error("---");
  console.error("Error traceback:");
  console.error("---");

  throw new Error();
};

module.exports = { expect };
