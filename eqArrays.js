const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};

// A function that compares two arrays, and returns a boolean of they match.  
// Note:  This function assumes both arrays are sorted in the same way!
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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

 // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["10", "02", "30"], ["10", "02", "30"]), true);

//module.exports = eqArrays;