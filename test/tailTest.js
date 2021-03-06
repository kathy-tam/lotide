const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it("returns [] for ['hi']", () => {
    assert.deepEqual(tail(["hi"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});

/*
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check tail
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: 1 element
const word = ["hi"];
assertEqual(tail(word).length, 0);  //return empty array

//Test Case: Empty array
const empty = [];
assertEqual(tail(empty).length, 0);  //return empty array
*/