const { add } = require("./add");

// Test that catches the mistatke:
test("add 3 and 4", () => {
  const expected = 7;
  const output = add(3, 4);

  expect(output).toBe(expected);
});

// Test that does not catch the mistake:
test("add 3 and 0", () => {
  const expected = 3;
  const output = add(3, 0);

  expect(output).toBe(expected);
});
