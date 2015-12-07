/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
*/


function titleCase(str) {  
  var newStrArray = str.toLowerCase.split(" ");
  
  for(var i = 0; i <newStrArray.length; i++) {
  	newStrArray[i] = newStrArray[i][0].toUpperCase() + newStrArray[i].substring(1);
  }
  var newStr = newStrArray.join(" ");
  }
  return newStr;
}

titleCase("I'm a little tea pot");

/*
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
*/