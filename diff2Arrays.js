/*
Compare two arrays and return a new array with any items only found in one of 
the original arrays.
*/

function diff(arr1, arr2) {
   
//combine into 1 array
//since indexOf gets the first index position, if the element's first position is same as its last
  // index position, it appears only one time
  
 var combined = arr1.concat(arr2); 
 var unique = [];
  
  unique = combined.filter(function(elm) {
    return combined.indexOf(elm) === combined.lastIndexOf(elm);
  });
 
return unique;
 
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/