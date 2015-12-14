
//Create a function that looks through an array (first argument) and 
//returns the first element in the array that passes a truth test (second argument).

function find(arr, func) {
  var num = 0;
  
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num = arr[i];
      return num;
    }
  }
  
  var filtered = arr.filter(function(num) {
    return num % 2 === 0;
  });

}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*
find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
find([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/