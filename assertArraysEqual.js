let eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let happy = String.fromCodePoint(0x1F600), mad = String.fromCodePoint(0x1F621);
  (eqArrays(actual, expected)) ? console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`) : console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;
