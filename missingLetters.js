
//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
 
  var missingLetter;
  
  for(var i = 1; i < str.length; i++) {
    //check to see whether the two letters are sequential
    var difference = str.charCodeAt(i) - str.charCodeAt(i-1);
    if(difference != 1) {
      missingLetter = String.fromCharCode(str.charCodeAt(i-1) +1);
    }
  }
    
  return missingLetter;
}

fearNotLetter("abce");


// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return undefined.
// fearNotLetter("yz") should return undefined.