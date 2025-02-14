
const friend = "BRUTUS";
const shiftValue = 3;
// Step 1 created a variable alphabet to store the latin alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2  //js index always start with 0 and Caesar's friend nae=me BRUTUS is stored in the friend variable
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.tolowercase()); //indexing the first letter of the variable friend and convert the first letter to lower case

// Q1 ans frm Step 2
// JavaScript uses zero-based indexing, which means the first item of a string is accessed using 0.

// Step 3
const newIndex = (index + shiftValue) % alphabet.length;
const encryptedFirstLetter = alphabet[newIndex];

// Q2 the modulo % alphabet.length ensures that if the shift goes beyod "z", it wraps back to the beginning.

// Step 4 
// Step 5
const alphabetLength = alphabet.length; //Get total number of length in the alphabet
const newIndex = (index + shiftValue) % alphabetLength; //Wrap around using modulo
const encryptedFirstLetter = alphabet[newIndex]; //Get the encrypted letter

// Step 6

//Extract the first 3 characters as a teaser message
const teaserMessage = encryptedMessage.slice(0, 3);

