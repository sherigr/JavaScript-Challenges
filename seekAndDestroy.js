
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
*/

//without using filter()
function destroyer(arr) {
  
  var newArray = arr;
  
  for(var i = 1; i < arguments.length; i++) {
    var filtered = [];
    
    for(var j = 0; j < newArray.length; j++) {

      if(newArray[j] != arguments[i]) { 
        filtered.push(newArray[j]);
    }
  }
  
    newArray = filtered;
  }
  
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// using filter()
function destroyer(arr) {
  
  var filteredArray;
  
  for(var i = 1; i < arguments.length; i++) {
    filteredArray = arr.filter(function(currentValue) {
      var shouldBeKept = true;      
    })
    
    for(var j = 0; j < newArray.length; j++) {
      if(newArray[j] != arguments[i]) { 
        filtered.push(newArray[j]);
      }
    }
  
    newArray = filtered;
  }
  
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/
