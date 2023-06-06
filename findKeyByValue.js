const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};


// searches a passed object for a key associated with a certain value, and returns the name of that key
const findKeyByValue = function(showsByGenre, nameOfShow) {
  // run through each key-value pair in the object...
  for (let someShow in showsByGenre){
    // if we found a key...
    if (nameOfShow === showsByGenre[someShow]) {
      // stop the show, and return the value associated with the key we found
      return someShow;
    }
  }
}

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;

