const assertEqual = function(actual, expected) {
  let happy = String.fromCodePoint(0x1F600), mad = String.fromCodePoint(0x1F621);
  (actual === expected) ? console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`) : console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
};

// Alternative: loop over Object.keys()
let findKeyByValue = function(obj, val){
  let key;
  for(let element in obj){
    if(obj[element] === val) {
      key = element;
    }
  }
  return key;
};

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);