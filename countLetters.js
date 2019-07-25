// const assertEqual = function(actual, expected) {

const countLetters = function(string) {
  let result = {};

  for (char of string) {
    let blank = " ";
    if (string[char]) {
      result[char] += 1;

      // *****string[char] = value; !!!!
    } else if (char === blank) {
      delete string[char];
    } else {
      result[char] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
