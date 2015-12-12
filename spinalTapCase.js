//Convert a string to spinal case. 
//Spinal case is all-lowercase-words-joined-by-dashes.

/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
*/

function spinalCase(str) {

  //if str has capital preceded by lowercase, add space between the letters
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  var regEx = (/\s|_/g);

  var newStr = str.replace(regEx, "-");
  
  return newStr.toLowerCase();
  
}

spinalCase('This Is Spinal Tap');


// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".