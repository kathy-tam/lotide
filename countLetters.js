const assertEqual = function(actual, expected) {
  let happy = String.fromCodePoint(0x1F600), mad = String.fromCodePoint(0x1F621);
  (actual === expected) ? console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`) : console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence){
  let count = {};
  sentence = sentence.split(' ').join('');
  for(const letter of sentence) {
    (count[letter]) ? count[letter] += 1 : count[letter] = 1;
  }
  return count;
};

// TEST CODE
const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["h"], 4);