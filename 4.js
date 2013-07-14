/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

var dromes = [];

for (var i = 999; i >= 100; i--) {
	for (var j = 999; j >= 100; j--) {
		var product = (i * j).toString();
		if (product == product.split("").reverse().join("")) {
			dromes.push(product);
		}
	}
}

var largest = Math.max.apply(Math, dromes);
console.log(largest);