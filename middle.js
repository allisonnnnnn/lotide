const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays) {
    console.log("pass!");
  } else {
    console.log("wrong");
  }
};

const middle = function(arr) {
  let mid = Math.floor(arr.length / 2);

  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[mid - 1], arr[mid]];
  } else if (arr.length % 2 !== 0) {
    return [arr[mid]];
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
