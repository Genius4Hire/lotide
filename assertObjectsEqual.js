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
}

// this function does a non-recursive (1 order deep) compare of all the properties in an object, and if they are the same, returns true
const eqObjects = function(object1, object2) { 
  // First, grab the key names from each object and put them in into two arrays.. 
  const obj1list = Object.keys(object1);
  const obj2list = Object.keys(object2);
  // ..sort these arrays..
  obj1list.sort();
  obj2list.sort();
  // if the set of keys do not match, stop now, and return false
  if (!eqArrays(obj1list,obj2list)) return false;
  // run the length of the key arrays, and compare their associated values...
  for (let x = 0; x < obj1list.length; x++) {
    // ..is each property identical?
    if (object1[obj1list[x]] !== object2[obj2list[x]]) {
      // if they are not, quit now and return false..
      return false;
    }
  }
  // all is well, both the key names, as well as each value are identical, so return true.
  // console.log('list1:', object1);
  // console.log('list2', object2);
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};

const assertObjectsEqual = function(actual, expected) {
  // locally enable object inspection, so we have a richer set of information for each object..
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`🤌: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😒 : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// testing..

// const shirtObject = { 
//   color: "red", 
//   size: "medium" 
// };

// const anotherShirtObject = { 
//   size: "medium", 
//   color: "red" 
// };

// const longSleeveShirtObject = { 
//   size: "medium", 
//   color: "red", 
//   sleeveLength: "long" 
// };

// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

// assertEqual(eqObjects(shirtObject , anotherShirtObject),true)
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject),false)

// // testing the output with assertions..

// assertObjectsEqual(eqObjects(shirtObject , anotherShirtObject),true);
// assertObjectsEqual(eqObjects(shirtObject , longSleeveShirtObject),false)

module.exports = assertObjectsEqual;