const eqArrays = function(arr1, arr2){
  // First, if the lengths are unequal, we are done, not equivilent
  if (arr1.length !== arr2.length){
    return false;
  }
  
  // since they are of equal length, run over the length of one of the arrays..
  for (let i = 0; i < arr1.length; i++){
    // compare values of each element, and if any don't match, set result fo false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // if we are here, the arrays are identical, so return true.
  return true;
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("[🤌,🤌,🤌]");
  } else {
    console.log("[😒,😒,😒]");
  }
};

// Returns the middle element of an array, or the middle two elements if the length of the array is even.
const middle = function(array){
  // Prepare an array for the result..
  let result = [];
  // if the array has no middle, the result is an empty array..
  if (array.length < 3) {
    result = [];
  } else if (array.length % 2 === 1){  // is there a single middle element?
    // if so, just make the middle element the result array..
    result = [array[Math.floor(array.length / 2)]];
  } else {
    // ..if not, put the middle 2 elements in the result array.
    result =  array.slice(Math.floor(array.length) / 2 - 1, Math.floor((array.length / 2 + 1)));
  }
  return result;
}

// Testing..
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);