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

// assertArraysEqual([1, 2, 3],[1, 2, 3]);
// assertArraysEqual(['1', '2', '3'],['1', '2', '3']);
// assertArraysEqual([1, 2, '3'],[1, 2, 3]);
// assertArraysEqual([1, 02, 3],[1, 2, 3]);
