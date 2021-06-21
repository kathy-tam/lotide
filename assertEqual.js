const assertEqual = function(actual, expected) {
  let happy = String.fromCodePoint(0x1F600), mad = String.fromCodePoint(0x1F621);
  (actual === expected) ? console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`) : console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("hi", "hi");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 1.1);
