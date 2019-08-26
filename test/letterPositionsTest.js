const assert = require("chai").assert;
const letterPosition = require("../letterPositions");

describe("#letterPositions", () => {
  it('should be true if letterPositions("hello").e is [1]', () => {
    assert.deepEqual(letterPosition("hello").e, [1]);
  });
});
