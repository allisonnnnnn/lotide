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
// const eqArrays = require("./eqArray");
// const assertArraysEqual = require("./assertArraysEqual");

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log("pass!");
//   } else {
//     console.log("wrong");
//   }
// };

const middle = function(arr) {
  let mid = Math.floor(arr.length / 2);

  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[mid - 1], arr[mid]];
  } else  {
    return [arr[mid]];
  }
};

module.exports = middle;
