// FUNCTION IMPLEMENTATION

// ASSERT STRING
const assertEqual = function(actual, expected) {

  let message = "";

  // TEMPLATE LITERALS  
  actual === expected ? message = `✅Assertion Passed: ${actual} === ${expected}`: message = `🛑Assertion Failed: ${actual} !== ${expected}`

  return console.log(message)
};

module.exports = assertEqual;


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

