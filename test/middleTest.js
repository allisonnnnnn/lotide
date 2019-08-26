// const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;
const middle = require("../middle");

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3]), [2]);

describe("#middle", () => {
  it("result should be [] when input length less than 3", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("result should be the same as the value the middle of given value", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
