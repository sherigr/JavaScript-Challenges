
// Check if a string (first argument) ends with the given target string (second argument).


function end(str, target) {
  
  var endString = str.substring(str.length-target.length);
  
  return target === endString;
}

end("Bastian", "n");

/*
end("Bastian", "n") should return true.
end("Connor", "n") should return false.
end("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
end("He has to give me a new name", "name") should return true.
end("He has to give me a new name", "me") should return true.
end("He has to give me a new name", "na") should return false.
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
*/