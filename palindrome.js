
//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  
  var regExp = (/\W|_/g);
  var newStr = str.replace(regExp, '').toLowerCase();
  
  var newStrReversed = newStr.split('').reverse().join('');
  
  return newStr === newStrReversed;
  
}

palindrome("eye");

/*
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
*/