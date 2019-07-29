const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (key of obj1Keys) {
    if (typeof object1[key] !== "object" && typeof object2[key] !== "object") {
      if (object1[key] !== object2[key]) return false;
    } else if (
      typeof object1[key] !== "object" ||
      typeof object2[key] !== "object"
    ) {
      return false;
    } else {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  // console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected)) {
    //?? what is inspect?

    console.log(`pass, ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`wrong, ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
