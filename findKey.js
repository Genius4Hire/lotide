const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};

// this function searched an object, and based of the truthiness of the 
// result, returns the first key that matches, or returns null if it's not found
const findKey = function(obj, callback) {
  // run through each property..
  for (item in obj) {
    // test the value of that property with the supplied callback
    if (callback(obj[item])) {
      // found it, so return that key
      return item;
    };
  }
  // key was not found, return undefined
  return undefined;
}

// const stars = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }

// assertEqual(findKey(stars, x => x.stars === 2), "noma")
// assertEqual(findKey(stars, x => x.stars === 1), "Blue Hill")
// assertEqual(findKey(stars, x => x.stars === 3), "Akaleri")

module.exports = findKey;