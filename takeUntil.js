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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    // keep add the truthy elements into the array, when hit the wrong one, and return
    //??? what is the difference between ! at the beginning and !==
    if (!item === callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }

  //??? why we should not return result here?
  // return results;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1);
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];

// ?? what is the logic when passing this func?
const results2 = takeUntil(data2, x => x === ",");

// console.log(results2);

assertArraysEqual(results2);
