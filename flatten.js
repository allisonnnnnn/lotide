const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
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

const flatten = function(arrSets) {
  // return arrSets.reduce((a, b) => a.concat(b), []);
  let result = [];
  for (let i = 0; i < arrSets.length; i++) {
    if (Array.isArray(arrSets[i])) {
      for (let j = 0; j < arrSets[i].length; j++) {
        result.push(arrSets[i][j]);
      }
    } else {
      result.push(arrSets[i]);
    }
  }
  return result;
};

const flattenRecursive = function(arrSets) {
  let result = [];

  for (let i = 0; i < arrSets.length; i++) {
    if (Array.isArray(arrSets[i])) {
      result = result.concat(flattenRecursive(arrSets[i]));
    } else {
      result.push(arrSets[i]);
    }
  }

  return result;
};

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

assertArraysEqual(flattenRecursive([1, 2, [3, [4]]]), [1, 2, 3, 4]);

flattenRecursive([3, [4]]);
flattenRecursive([4]);
