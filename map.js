// Function that compares every element of both arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// Function that asserts if the two arrays are equal
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) return console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

// Map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Tests
const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom", "bowie"];
const words3 = ["ground", "control", "to", "major", "bob"];
const numbers = [1, 2, 3, 4, 5];

assertArraysEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); // Pass
assertArraysEqual(map(words2, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); // Fail
assertArraysEqual(map(words3, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); // Fail
assertArraysEqual(map(numbers, nb => nb * 2), [ 2, 4, 6, 8, 10 ]); // Pass