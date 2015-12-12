
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second 
element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in 
the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/


function mutation(arr) {
  // comparing 2nd word to 1st word
  var lettersExist = false;
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  
  for(var i = 0; i < secondWord.length; i++) {
    var letter = secondWord.charAt(i);
      if(firstWord.indexOf(letter) !== -1) {
        lettersExist = true;
    } else {
      return false;
    }
  }
  
  return lettersExist;
}

mutation(["hello", "hey"]);

/*
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
*/