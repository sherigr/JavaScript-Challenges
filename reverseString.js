
// Reverse the provided string.

function reverseString(str) {
  
  return str.split('').reverse().join('');
}

reverseString("hello");


/*
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/