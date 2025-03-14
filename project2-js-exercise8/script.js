const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
// Step 1
function encryptLetter (letter, shift) {
    // Find the index of the letter in the alphabet
    const index = alphabet.indexOf(letter.toLowerCase());
    // Calculate the new index
    const newIndex = (index + shift) % alphabet.length;
    return alphabet[newIndex];
}

// Step 2
function encryptMessage (word, shift) {
    // Store encrypted word
    let encryptedMessage = "";
    // Loop through each letter and encrypt it
    for (let i = 0; i < word.length; i++)
    {
        encryptedMessage += encryptLetter(word[i], shift);
    }
    return encryptedMessage;
}

// Step 3
function decryptLetter(letter, shift) {
    // Find the index of the letter in the alphabet
    const index = alphabet.indexOf(letter.toLowerCase());
    // Calculate the new index after shifting backward
    const newIndex = (index - shift + alphabet.length) % alphabet.length;
    // Return the decrypted letter
    return alphabet(newIndex);
}

// Step 4
function decryptMessage(word, shift) {
    let decryptedMessage = "";
    // Loot each through letter and decrypt it
    for (let i = 0; i < word.length; i++) {
        decryptedMessage += decryptLetter(word[i], shift);
    }
    return decryptedMessage;
}

//Q & A: Yes , because the encryption and decryption functions are inverse operations.
//They cancel each other outm restoring the original word