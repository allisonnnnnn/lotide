const countLetters = function(string) {
  let result = {};

  // Remove spaces
  string = string.replace(/\s/g, "");

  for (char of string) {

    if (string[char]) {
      result[char] += 1;

      // *****string[char] = value; !!!!
    } else {
      result[char] = 1;
    }``
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
