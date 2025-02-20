//Step 1: This generates a random floating point number between 0 and 1
const randomDecimal =  Math.random();
//Step 2: to determine the range between 3 and 33
// Q1: I add 1 coz I want an inclusive range
const range = 33 - 3 + 1; 
//Step 3: 
// Q2: This scales the value to a range of 0 to 31, ensuring that after flooring, we get an integer between 0 and 30
const randomInRange = randomDecimal * range;
//Step 4
// Q3: I use Math.floor to ensure the value is always rounded down to the nearest whole number
const randomInt = Math.floor(randomInRange);
// Step 4
//Q$: Adding 3 ensures that our value now falls within range [3, 33]
const shiftValuie = randomInt + 3;
