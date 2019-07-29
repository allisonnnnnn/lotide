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

const without = function(source, remove) {
  // let newArr = [];
  // for (let i = 0; i < source.length; i++) {
  //   if (!remove.includes(source[i])) {
  //     newArr.push(source[i]);
  //   }
  // }
  // return newArr;
  let result = source.filter(item => {
    return remove.includes(item);
  });
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// let result = source.filter(item => {
//   if (item === remove[i]) {
//     return result;
//   }
// });
