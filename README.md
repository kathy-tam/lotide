# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ktam/lotide`

**Require it:**

`const _ = require('@ktam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assertion for equality between 2 arrays
* `assertEqual(...)`: assertion for equality between 2 primtiives
* `assertObjectsEqual(...)`: assertion for equality between 2 objects
* `countLetters(...)`: returns an object with counts for each letter in the input
* `countOnly(...)`: returns an object with counts for the specified items
* `eqArrays(...)`: returns boolean for equality between 2 arrays
* `eqObjects(...)`: returns boolean for equality between 2 objects
* `findKey(...)`: retrieves a key by specified callback
* `findKeyByValue(...)`: retrieves a key by its value
* `flatten(...)`: flattens nested array into a 1D array
* `head(...)`: retrieves head (1st element) of array
* `letterPositions(...)`: returns an array of the positions of the letters in the input
* `map(...)`: performs callback on each element in the array and returns an array
* `middle(...)`: retrieves the middle element(s) of array
* `tail(...)`: retrieves tail (all elements except head) of array
* `takeUntil(...)`: retrieves elements in an array up until a specified point
* `without(...)`: returns an array without the specified items in input array