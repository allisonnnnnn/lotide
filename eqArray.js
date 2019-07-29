const assertEqual = require("./assertEqual");

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (eqArrays(arr1[i], arr2[i]) === false) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
    // not array both use === compare
    // one array one not, return false no need to compare
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3, [4, 5]], [1, 2, 3, [4, 6]]), true);
module.exports = eqArrays;
