const eqArrays = require("./eqArray");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}` );
  } else {
    console.log("🛑🛑🛑false");
  }
};

module.exports = assertArraysEqual;
