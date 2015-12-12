/*
Return the sum of all odd Fibonacci numbers up to and including the passed 
number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8, and 
each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the 
odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  
  var fibs = [0,1];
  var a = 0;
  var b = 1;
  var result = b;
  
  for(var i = 2; i <= num; i++){
    // a + b are the 2 numbers before the result
    result = a + b;
    // after result, a now equals b & b now equals the result
    a=b;
    b=result;
    if(b <= num && b % 2 !== 0) {
      fibs.push(b);
    }
  }
  
  var oddSum = fibs.reduce(function(a,b) {
    return a + b;
  });
  
  return oddSum;
}

sumFibs(4);


// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.
