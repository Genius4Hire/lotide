const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words); 

// Test Case: Remove "Hello"
assertArraysEqual(result, ["Lighthouse", "Labs"]); 

// Test Case: Check the original array
assertEqual(words.length, 3); // original array should still have 3 elements!