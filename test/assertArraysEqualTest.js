const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [1, 2, 3];

assertArraysEqual(arr1, arr2);  // false
assertArraysEqual(arr2, arr3);  // false
assertArraysEqual(arr3, arr1);  // true

