// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArray");
// const eqObjects = function(obj1, obj2) {
//   let obj1K = Object.keys(obj1);
//   let obj2K = Object.keys(obj2);
//   if (obj1K.length !== obj2K.length) {
//     return false;
//   }

//   for (let key of obj1K) {
//     if (typeof obj1[key] !== typeof obj2[key]) {
//       return false;
//     } else if (typeof obj1[key] === typeof obj2[key]) {
//       if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
//         if (eqArrays(obj1[key], obj2[key]) === false) {
//           return false;
//         }
//       } else {
//         if (obj1[key] !== obj2[key]) {
//           return false;
//         }
//       }
//     }
//   }

//   return true;
// };

// Returns true if both objects have identical keys with identical values.

const eqObjects = function(obj1, obj2) {
  let obj1K = Object.keys(obj1);
  let obj2K = Object.keys(obj2);

  if (obj1K.length !== obj2K.length) {
    return false;
  }

  for (let key of obj1K) {
    if (obj1[key].length !== obj2[key].length) {
      return false;
    }
    if (typeof obj1[key] !== typeof obj2[key]) {
      return false;
    } else if (typeof obj1[key] === typeof obj2[key]) {
      if (typeof obj1 === "object" && typeof obj2 === "object") {
        if (eqObjects(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (eqArrays(obj1[key], obj2[key]) === false) {
          return false;
        }
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cba = { b: "2", c: "3", a: "1" };
// // eqObjects(ab, ba);
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(abc, cba), true);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;
