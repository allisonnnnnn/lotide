// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//       if (eqArrays(arr1[i], arr2[i]) === false) {
//         return false;
//       }
//     } else if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//     // not array both use === compare
//     // one array one not, return false no need to compare
//   }
//   return true;
// };

const eqArrays = require("./eqArray");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✌️ pass!");
  } else {
    console.log("💩 wrong");
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
module.exports = assertArraysEqual;
