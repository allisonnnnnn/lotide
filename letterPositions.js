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

const letterPositions = function(sentence) {
  let results = {};
  sentence = sentence.split(" ").join("");

  for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence[i]);
    // results += `${sentence[i]}:${[i]}`;

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
