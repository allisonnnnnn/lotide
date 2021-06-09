const assertArraysEqual = require("./assertArraysEqual")



const without = function(source, remove) {

  let result = source.filter(item => {
    return !remove.includes(item);
  });
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

