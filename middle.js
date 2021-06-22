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

let middle = function(arr) {
  if(arr.length <= 2){ return [] };
  let middleIndex = Math.floor(arr.length/2);
  return (arr.length % 2) ? [arr[middleIndex]] : arr.slice(middleIndex-1, middleIndex+1);
};

// TEST CODE
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);