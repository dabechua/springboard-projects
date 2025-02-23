// Step 1
//Use unshift() to add "BRUTUS" to the beginning of the array
getComputedStyle.unshift("BRUTUS");
//Q1 - We can verify that "BRUTUS" was added by checking if guests[0] is "BRUTUS" or by printing the full array using console.log(guests).

// Step 2
// Use push() to add "AUGUSTUS" and "LUCIA" to the end of the array
guests.push("AUGUSTUS", "LUCIA");

// Step 3
//Use indexOf() to find the position of "SPARTACUS"
const spartacusIndex = guests.indexOf("SPARTACUS")
//Q2 - spartacus would be -1 if "SPARTACUS" is not in the array

// Step 4
// Find the index of "CASSIUS" and remove it using splice()
const cassiusIndex =  guests.indexOf("CASSIUS");
if (cassiusIndex !== -1) {
    guests.splice(cassiusIndex, 1);
}

// Step 5
// Use slice() to create a new array with the first three guests
const specialGuests = guests.slice(0, 3);

// Step 6
// Sort the array while keeping the first guest unchanged
const firstGuest = guests.shift();
guests.sort(); //sort remaining guests alphabetically
guests.unshit(firstGuess); // Add first guest back at the start
