// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require("./assertEqual");

const tail = function(arr) {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
assertEqual(words.length, 3);
module.exports = tail;
