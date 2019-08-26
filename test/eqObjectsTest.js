const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("should be false if eqObjects(cd,cd2)", () => {
    assert.equal(eqObjects(cd, cd2), false);
  });
});
