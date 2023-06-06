
// Returns the middle element of an array, or the middle two elements if the length of the array is even.
const middle = function(array){
  // Prepare an array for the result..
  let result = [];
  // if the array has no middle, the result is an empty array..
  if (array.length < 3) {
    result = [];
  } else if (array.length % 2 === 1){  // is there a single middle element?
    // if so, just make the middle element the result array..
    result = [array[Math.floor(array.length / 2)]];
  } else {
    // ..if not, put the middle 2 elements in the result array.
    result =  array.slice(Math.floor(array.length) / 2 - 1, Math.floor((array.length / 2 + 1)));
  }
  return result;
}

module.exports = middle;
