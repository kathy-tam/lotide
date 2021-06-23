const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else { break }
  }
  return result;
}

//Assert fns
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
