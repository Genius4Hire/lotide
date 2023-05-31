const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤌: ${actual} === ${expected}`);
  } else {
    console.log(`😒 : ${actual} !== ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount){
  // Create an object to track the counts..
  let result = {};  
  // Run through the list of items..
  for (let item of allItems) {  
    if (itemsToCount[item]) { // does this key exist in the object containing items we want to count?
      if (result[item]) { // ..and, have we already got a tally running?
        result[item] += 1; // ...if so, bump up the count
      } else {
        result[item] = 1;  // start counting by creating a key labelled with the item, and setting it to 1.
      }
    }
  }
  return result;
}

// test cases...

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
