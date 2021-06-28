const assertEqual = require('./assertEqual');

let eqArrays = function(arr1, arr2) {
  let check = true;
  if(arr1.length === arr2.length) {
    for(let i = 0; i < arr1.length; i++) {
      if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if(!eqArrays(arr1[i], arr2[i])) { return false }
      } else if(arr1[i] !== arr2[i]) { return false };
    }
  }else{ 
    check = false; 
  }
  return check;
}

module.exports = eqArrays;