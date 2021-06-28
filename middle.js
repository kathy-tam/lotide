const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

let middle = function(arr) {
  if(arr.length <= 2){ return [] };
  let middleIndex = Math.floor(arr.length/2);
  return (arr.length % 2) ? [arr[middleIndex]] : arr.slice(middleIndex-1, middleIndex+1);
};

module.exports = middle;