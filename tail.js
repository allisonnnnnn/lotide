const assertArraysEqual = require("./assertArraysEqual");

const tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertArraysEqual(result, ["Lighthouse", "Labs"]);

tail(["Hello", "Lighthouse", "Labs"])

module.exports = tail;
