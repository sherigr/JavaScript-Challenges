
/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
*/


function largestOfFour(arr) {

  var newArr = [];
  
  for(var i = 0; i < arr.length; i++) {
    var largest = -10000;  //every time going through inner array, will reset itself to -10000, 
    //want to make sure first time it runs it's smaller than any number in the array
    for(var j = 0; j < arr[i].length; j++) {
    //loop through the inner aray and return the largest number
     if(largest < arr[i][j]) {
       largest = arr[i][j];
     }      
   }
   newArr.push(largest);
      
  }
  
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
*/