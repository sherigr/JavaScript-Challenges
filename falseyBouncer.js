
/*
Remove all falsy values from an array.
Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {

  var newArr = arr.filter(removeFalse);
  return newArr;
  
  function removeFalse(value) {
    return Boolean(value);
  }
}

bouncer([7, "ate", "", false, 9]);

// Refactored
function bouncer(arr) {

	var newArr = arr.filter(function(remFalse) {
		return Boolean(remFalse);
	});

	return newArr;
}

/*
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
*/