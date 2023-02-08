function transformArrayToTwoDimension(
  oneDimensionArray,
  lengthOfInternalArray
) {
  let tmpArray = [];
  let twoDimensionArray = [];

  oneDimensionArray.forEach((element) => {
    tmpArray.push(element);
    if (tmpArray.length === lengthOfInternalArray) {
      twoDimensionArray.push(tmpArray);
      tmpArray = [];
    }
  });

  return twoDimensionArray;
}

let array = [1, 2, 3, 4, 5, 6];
console.log(transformArrayToTwoDimension(array, 2));
