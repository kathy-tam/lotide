const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Assert fns
let eqArrays = function(arr1, arr2) {
  let check = true;
  if(arr1.length === arr2.length) {
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) { return false };
    }
  }else{ 
    check = false; 
  }
  return check;
}

const assertArraysEqual = function(actual, expected) {
  let happy = String.fromCodePoint(0x1F600), mad = String.fromCodePoint(0x1F621);
  (eqArrays(actual, expected)) ? console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`) : console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

let extractFirstLetter = function(word) {
  return word[0]
};
const results2 = map(words, extractFirstLetter);
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']);
