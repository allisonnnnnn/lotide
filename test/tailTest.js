const assert = require("chai").assert;

const tail = require("../tail");
// const eqArray = require("../eqArray");
// const assertEqual = require("../assertEqual");

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// console.log(assertEqual(eqArray(result, ["Lighthouse", "Labs"]), true));

describe("#tail", () => {
  it("returns true when the result.length is equal to the given value", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });
});
