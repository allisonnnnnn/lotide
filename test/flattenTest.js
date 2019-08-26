const expect = require("chai").expect;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("return ture if flatten ([1, 2, [3, 4], 5, [6]]) is equal to [ 1, 2, 3, 4, 5, 6 ]", () => {
    expect(flatten([1, 2, [3, 4], 5, [6]])).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });
});
