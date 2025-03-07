const friend = "BRUTUS"
const shiftValue = 3;

// Step 1: Define the Latin alphabet
const alphabet = "abcdefghijkmnopqrstuvwxyz";
// Step 2
// Variable to store the encrypted name
let encryptedName = "";

for (let i = 0; i < friend.length; i++)
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}

/*
Question 1: What advantage does using a loop provide over manually encrypting each letter?
Answer: A loop automates the encryption process, making it efficient and scalable. Instead of manually shifting each letter, the loop applies the shift to all letters dynamically, saving time and effort.

Question 2: Explain the role of alphabet.length in our loop. How does it aid in the encryption process?
Answer: The alphabet.length ensures that when the shift goes beyond 'Z', it wraps around to the beginning of the alphabet. This prevents indexing errors and maintains the cyclic nature of the Caesar Cipher.
*/