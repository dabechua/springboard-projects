// Starter Code
const numbers = [5, 12, 3, 20, 8, 15, 7, 2, 33, 9, 18, 1, 27, 6, 13, 21, 10, 0, 99, 34, 21, 40, 56];

//ans
const lessThanTen = [];

numbers.forEach(function(number) {
	if(number < 10) {
		lessThanTen.push(number);
	}
});

console.log(lessThanTen);