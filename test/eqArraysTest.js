const eqArrays = require("../eqArray");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("should return true if eqArrays([1, 2, 3, [4, 5]], [1, 2, 3, [4, 5]]", () => {
    assert.equal(eqArrays([1, 2, 3, [4, 5]], [1, 2, 3, [4, 5]]), true);
  });
});

// const assertEqual = require("../assertEqual");
// assertEqual(eqArrays([1, 2, 3, [4, 5]], [1, 2, 3, [4, 5]]), true);
