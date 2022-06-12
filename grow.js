// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let inputArray = [1, 2, 3, 4];

const mulitpliedValues = (arrayOfIntegers) => {
  let sumOfProducts = 0;

  // loop through input array
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    let current = arrayOfIntegers[i];
    let next = arrayOfIntegers[i + 1];
    if (current !== arrayOfIntegers[arrayOfIntegers.length - 1]) {
      sumOfProducts += current * next;
    } else {
      sumOfProducts += current;
    }
  }
  return sumOfProducts;
};
console.log(mulitpliedValues(inputArray));
