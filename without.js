const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  let result = true;
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("😒");
    return;
  }

  let isEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
    }
  }

  if (isEqual) {
    console.log("🤌");
  } else {
    console.log("😒");
  }
};


const without = function(arr1, itemsToRemove) {
  // Prepare a new array for results..
  let newArray = [];
  // run the length of the array
  for (let item of arr1) {
    // if the item is not in not in the blacklist...
    if (!itemsToRemove.includes(item)) {
      // ..add it to the output
      newArray.push(item);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];

//remove "hello", and compare the result..
console.log("Testing without..")
assertArraysEqual(without(words, ["hello"]), ["world", "lighthouse"]);
console.log();
//make sure original array is intact..
console.log("Testing integrity of original array..")
assertArraysEqual(["hello", "world", "lighthouse"], words);
console.log();
console.log("---------- Tests ----------")
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], ["3"]), ["1", "2"]);
console.log();


module.exports = without;