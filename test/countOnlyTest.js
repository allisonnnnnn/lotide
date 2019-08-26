const expect = require("chai").expect;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it('should be true if result1["Jason"] is 1 which occurs only once', () => {
    const result1 = countOnly(firstNames, {
      Jason: true
      // Karima: true,
      // Fang: true
    });
    expect(result1["Jason"]).to.equal(1);
  });
  it('should be true if result1["Karima"] is undefined', () => {
    const result1 = countOnly(firstNames, {
      // Jason: true
      Karima: true
      // Fang: true
    });
    expect(result1["Karima"]).to.equal(undefined);
  });
  it('should be true if result1["Fang"] is 2', () => {
    const result1 = countOnly(firstNames, {
      // Jason: true,
      // Karima: true
      Fang: true
    });
    expect(result1["Fang"]).to.equal(2);
  });
});
