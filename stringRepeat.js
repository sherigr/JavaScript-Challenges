
//Repeat a given string (first argument) n times (second argument). 
//Return an empty string if n is a negative number.


//using repeat()

function repeat(str, num) {
  
  if(num < 0) {
    return "";
  }

  return str.repeat(num);
}

repeat("abc", 3);


//without using repeat()
function repeat(str, num) {

	var newStr = "";

	for(var i = 0; i < num; i++) {
		newStr += str;
	}

 return newStr;
}

repeat("abc", 3);

/*
repeat("*", 3) should return "***".
repeat("abc", 3) should return "abcabcabc".
repeat("abc", 4) should return "abcabcabcabc".
repeat("abc", 1) should return "abc".
repeat("*", 8) should return "********".
repeat("abc", -2) should return "".
*/
