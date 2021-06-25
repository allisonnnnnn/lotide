const middle = function(arr) {
  let mid = Math.floor(arr.length / 2);

  console.log(mid)
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[mid - 1], arr[mid]];
  } else  {
    return [arr[mid]];
  }
};

module.exports = middle;

