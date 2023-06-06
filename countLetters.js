const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};

// counts the frequency of characters in a string, and returns an object containg the count for each char
const countLetters = function(sentence){
  // init an object to house the frequency data
  count = {};
  // run through each character of the string..
  for (let letter of sentence){
    // if we have already seen this letter...
    if (letter in count) {
      // then bump up the count...
      count[letter]++;
    } else {  //..otherwise, it's the first time we have seen it, so start counting by adding a new key-value pair
      count[letter] = 1;
    }
  }
  return count;
}


module.exports = countLetters;
