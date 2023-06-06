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

// this function searches from the beginning of an array, and collects elements in a new array until a callback function returns truthy.
const takeUntil = function(array, callback) {
  // set up an array to house the data..
  output = [];
  // run the length of the array..
  for (item of array){
    // use the callback to determine if the data satisfies the callback
    if (!callback(item)) {
      // if the item fails the callback condition, save the element, until it succeeds
      output.push(item);
    } else break; // stop the loop, because the callback is truthy.
  }
  return output;
};

// // testing

// let data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// let results = takeUntil(data, x => x < 0);
// console.log("Results:", results);
// assertArraysEqual(results, [ 1, 2, 5, 7, 2 ]);

// console.log('---');

// data = ["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"];
// results = takeUntil(data, x => x === ',');
// console.log("Results:", results);
// assertArraysEqual(results, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// console.log('---');

// data = ["You", "don/'t", "know", "what", "it/'s", "like"];
// results = takeUntil(data, x => x === 'what');
// console.log("Results:", results);
// assertArraysEqual(results, ["You", "don/'t", "know"]);


module.exports = takeUntil;
