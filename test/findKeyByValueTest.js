const expect = require("chai").expect;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe("#findKeyByValue", () => {
  it('should be ture if findKeyByValue(bestTVShowsByGenre, "The Wire")is "drama"', () => {
    expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).to.equal("drama");
  });
});
