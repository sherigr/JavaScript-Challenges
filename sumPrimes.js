/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. 
For example, 2 is a prime number because it's only divisible by 1 and 2. 
1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  var isPrime = [];
  
  for (var counter = 2; counter <= num; counter++) {

      var notPrime = false;
      for (var i = 2; i <= counter; i++) {
          if (counter % i === 0 && i !== counter) {
              notPrime = true;
          }
      }
      if (notPrime === false) {
          isPrime.push(counter);
      }
  }

  var primesum = isPrime.reduce(function(a,b) {
      return a + b;
   });

    return primesum;
}

sumPrimes(10);

/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/