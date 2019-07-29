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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("pass!");
  } else {
    console.log("wrong");
  }
};

const words = ["ground", "control", "to", "major", "tom"];

// higher-order function should define ealier
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log("item BEFORE: ", item);
    console.log("item AFTER: ", callback(item));
    console.log("---");
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1);

// const results1 = function(word) {
//   return word[0];
// };

// map(words, word => word[0]);
