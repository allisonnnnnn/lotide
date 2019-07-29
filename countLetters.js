const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};

  string = string.replace(/\s/g, "");

  for (char of string) {
    let blank = " ";
    if (string[char]) {
      result[char] += 1;

      // *****string[char] = value; !!!!
    } else {
      result[char] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
