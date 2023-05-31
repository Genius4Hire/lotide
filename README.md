# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my cirriculum at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @genius4hire/lotide`

**Require it:**

`const _ = require('@genius4hire/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertArraysEqual(arr1, arr2)`: compares the contents of arr1 and arr2, and outputs a result to the console
* `assertEqual(actual, expected)`: compares two values, and outputs a result to the console
* `assertObjectsEqual(actual, expected)`: compares two object, and outputs a result to the console
* `countLetters(sentence)`: This function counts the frequency of letters in a string, and returns an object containing a character:count pair for each letter surveyed. 
* `countOnly(allItems, itemsToCount)`: return a subset of allItems, removing itemsToCount.
* `eqArrays(arr1, arr2)`: compares the elements of arr1 and arr2, and if they are the same, returns true or false if not
* `eqObjects(object1, object2)`: returns true or false, based on a perfect match of key:value pairs in two objects.
* `findKey(obj, callback)`: returns the first key for which the callback returns a truthy value, or undefined if unsuccessful.
* `findKeyByValue(showsByGenre, nameOfShow)`: scans showsByGenre, and returns an object containing the first key that contains the given value
* `head(data)`: returns the first element of an array.
* `letterPositions(sentence)`: returns and object containing all the indices (zero-based positions key pair) in sentence, where a character is found
* `map(array, callback)`: returns an array of results from the provided callback that is passed each element in array
* `middle(array)`: return the middle-most element(s) of the given array, either one element for and odd-lengthed array, or two elements for an even lengthed array
* `tail(data)`: returns an array containing every element from data, except the first
* `takeUntil(array, callback)`: returns a subset of array of elements from a provided array until the callback provided returns a truthy value.
* `without(arr1, itemsToRemove)`: returns an array containing a subset of arr1 that does not contain itemsToRemove.