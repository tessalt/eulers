/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

var product = 600851475143;

function isPrime(n) {
	for (var i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		} 
	}
	return true;
}

function largestPrimeFactor(n) {
	for (var i = 2; i < n; i++) {
		if (n % i === 0) {
			n = n/i;			     
		}
	}
	return n;
}

console.log(largestPrimeFactor(product))