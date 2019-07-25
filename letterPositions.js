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
