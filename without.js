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
