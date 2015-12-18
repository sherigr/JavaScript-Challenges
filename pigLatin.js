/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it 
to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
*/

function translate(str) {

 var newStr = str.split(' ');
 var firstVowelPosition = str.search("(a|e|i|o|u)");

 if(firstVowelPosition === 0) {
   newStr.push('way');    
 } else { 
    if(firstVowelPosition !== 0) {
     var slicedStr = str.slice(0,firstVowelPosition);
     var vowel = str.substring(firstVowelPosition);
     newStr = vowel + slicedStr + 'ay';
     return newStr;
    }
 }

 return newStr.join('');

}