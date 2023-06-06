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

// this function take a string, and returns an object containing a key-value pair for each letter, where the key is the char, and the value is an array of indexes where the letter occurs in the string 
const letterPositions = function(sentence) {
  // set up an object for the results..
  const results = {};
  // run the length of the string..
  for (let i = 0; i < sentence.length; i++){
    // cache the current letter...
    let currentLetter = sentence[i];
    // if the letter has already been encountered..
    if (results[currentLetter]){
      // then add it's location to the array for that character (the value of the key-value pair)...
      results[currentLetter].push(i) 
    } else {  // ...but if this is the first instance of the letter..
      // ..then make the object, and log the first index.
      results[currentLetter] = [i];
    }
  }
  delete results[' ']; //remove space key, as we are not counting it.
  return results;
};


// console.log(letterPositions("hello"))

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);

module.exports = letterPositions;