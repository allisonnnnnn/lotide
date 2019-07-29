const assert = require("chai").assert;

const tail = require("../tail");
// const assertEqual = require("../assertEqual");

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", () => {
  it("returns true when the result.length is equal to the given value", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });
});
