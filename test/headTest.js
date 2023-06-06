const head = require('../head');
const assertEqual = require('../assertEqual');

let testArray = [1, 2, 3];
assertEqual(head(testArray), 1);

testArray = [0, 1, 2, 3];
assertEqual(head(testArray), 0);
