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

let flatten = function(arr) {
  let flattened = [];
  for(let e of arr){
    (Array.isArray(e)) ? flattened = flattened.concat(flatten(e)) : flattened.push(e)
  }
  return flattened;
}

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [], 4]), [1, 2, 4]);