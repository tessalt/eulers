/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000. */

var threes = 0;
var fives = 0;
var fifteens = 0;

function fizzPlusBuzzMinusFizzBuzz() {
	for (var i = 0; i < 1000; i +=3) {
		threes += i;
	}
	for (var j = 0; j < 1000; j +=5) {
		fives += j;
	}
	for (var k = 0; k < 1000; k +=15) {
		fifteens += k;   
	}
	return threes + fives - fifteens;
}

console.log(fizzPlusBuzzMinusFizzBuzz());