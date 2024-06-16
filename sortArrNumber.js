// Strategy Stages:
// [2, 2, 2, 0, 5, 6, 4, 0, 1, 5, 3, 0, 3, 2, 1, 0] Input
// [[2, 2, 2, 0], [4, 5, 6, 0], [1, 3, 5, 0], [1, 2, 3, 0]] Splitting and Sorting
// [[2, 2, 2, 0], [1, 2, 3, 0], [1, 3, 5, 0], [4, 5, 6, 0]] Sorting by Sum
// [2, 2, 2, 0, 1, 2, 3, 0, 1, 3, 5, 0, 4, 5, 6, 0] Flattening

const sortArrNumber = (number) => {
  const result = [];
  let subArr = [];

  number.forEach((num) => {
    if (num === 0) {
      subArr.sort((a, b) => a - b);
      subArr.push(num);
      result.push(subArr);
      subArr = [];
    } else {
      subArr.push(num);
    }
  });

  result.sort(
    (a, b) =>
      a.reduce((sum, num) => sum + num) - b.reduce((sum, num) => sum + num)
  );

  return result.flat();
};

// Test cases
console.log(sortArrNumber([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 4, 2, 8, 0])); // [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]
console.log(sortArrNumber([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 2, 2, 2, 0])); // [1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0]
console.log(sortArrNumber([2, 2, 2, 0, 5, 6, 4, 0, 1, 5, 3, 0, 3, 2, 1, 0])); // [2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0]
