// Check if a value is classified as a boolean primitive. 
// Return true or false.


function boo(bool) {
  
  return bool === true || bool === false;
  
}

boo(null);


// boo(true) should return true.
// boo(false) should return true.
// boo([1, 2, 3]) should return false.
// boo([].slice) should return false.
// boo({ "a": 1 }) should return false.
// boo(1) should return false.
// boo(NaN) should return false.
// boo("a") should return false.