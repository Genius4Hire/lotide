
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
}

// creates a parallel array containing the result of logic from a supplied callback
const map = function(array, callback) {
  // prepare an array for the results..
  const results = [];
  // run the length of the passed array..
  for (let item of array) {
    // record the results from the called callback function in out new array..
    results.push(callback(item));
  }
  return results;
}

// const words = ["ground", "control", "to", "major", "tom"];

// // define expected test results...
// const firstLetters = ["g","c","t","m","t"];
// const whoohoo = ['groundwhoohoo','controlwhoohoo','towhoohoo','majorwhoohoo','tomwhoohoo'];
// const abrev = [ 'gd', 'cl', 'to', 'mr', 'tm' ];

// // create an array for some results..
// let results = [];

// // Grab the first letter with map() and put it in 'results'..
// results = map(words, word => word[0]);
// console.log("Result: ", results);
// assertArraysEqual(results, firstLetters);

// // Add 'whoohoo' to the end of each string in an array with map() and put it in 'results'..
// results = map(words, word => word + "whoohoo");
// console.log("Result: ", results);
// assertArraysEqual(results, whoohoo);

// // Grab the first letter and last letter of each element with map() and put it in 'results'..
// results = map(words, word => word[0] + word[word.length -1]);
// console.log("Result: ", results);
// assertArraysEqual(results, abrev);

module.exports = map;
