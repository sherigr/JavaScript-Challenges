
/*
Iterate through an array using a loop
Create a function that wil mulitply each number in the array by 2
Pass each number in the array to this function
Save the original numbers and the doubled results as key-value pairs in an object
*/

var nums = [2,6,5,12,7];
var doubled = [];
var stored = {};

function doubling() {

	for(var i = 0; i < nums.length; i++) {
		doubled.push(nums[i] * 2);
		for(var j = 0; j < doubled.length; j++) {
			stored[nums[i]] = doubled[i];
		}
	}
	return stored;

}






