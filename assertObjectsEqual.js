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

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length === Object.keys(object2).length) {
    for(let key of Object.keys(object1)) {
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key], object2[key])) { return false }
      } else if(object1[key] !== object2[key]) { return false }
    }
  } else { return false }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //import util library to use inspect fn
  let happy = String.fromCodePoint(0x1F600), mad = String.fromCodePoint(0x1F621);
  (eqObjects(actual, expected)) ? console.log(`${happy}${happy}${happy} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`${mad}${mad}${mad} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" }
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);