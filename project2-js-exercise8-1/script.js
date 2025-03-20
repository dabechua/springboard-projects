const alphabet = "abcdefghhijklmopqrstuvqxyz";

function encrypt(message, shiftValue) {
    let encryptedMessage = "";
    let counter = 0;
    // Loop through each character in the message
    for (let i = 0; i < message.length; i++) {
        let char = message[i]; // Get the current character
        // Check if the character is a letter in the alphabet (no numbers, symbols etc)
        if (alphabet.includes(char.toLowerCase())) {
            let isUpperCase = char === char.toUpperCase();
            let index = alphabet.indexOf(char.toLowerCase()); // Find the index of the character in the alphabet
            let newIndex = (index + shiftValue) % alphabet.length;
            //  Handle negative index wrapping for shifts beyond 'a'
            if (newIndex < 0) newIndex += alphabet.length;
            let newChar = alphabet[newIndex]; // Get the original character
            encryptedMessage += isUpperCase ? newChar.toUpperCase() : newChar;
            counter++; //Increment the counter for valid characters
        } else {
            // unchange if it's not a letter
            encryptedMessage += char;
        } 
        //Insert a random letter from the alphabet after every two valid characters
        if (counter % 2 === 0 && counter  > 0) {
          let randomLetter =  alphabet[Math.floor(Math.random() * alphabet.length)];
          encryptedMessage += randomLetter;
        }
      }
      return encryptedMessage; // Return the fully encrypted message
  }
  
  // Function to decrypt a message
  function decrypt(encryptedMessage, shiftValue) {
      let decryptedMessage = ""; // Initialize an empty string to store the decrypted message
      let counter = 0; // Counter to track real letters and skip random ones
  
      // Loop through each character in the encrypted message
      for (let i = 0; i < encryptedMessage.length; i++) {
          let char = encryptedMessage[i]; // Get the current character
  
          // Check if the character is a letter in the alphabet
          if (alphabet.includes(char.toLowerCase())) {
              let isUpperCase = char === char.toUpperCase(); // Check if the letter is uppercase
              let index = alphabet.indexOf(char.toLowerCase()); // Find the index of the character in the alphabet
              let newIndex = (index - shiftValue) % alphabet.length; // Reverse the shift by subtracting the shift value
  
              // Handle negative index wrapping for shifts beyond 'a'
              if (newIndex < 0) newIndex += alphabet.length;
  
              let newChar = alphabet[newIndex]; // Get the original character
  
              // Preserve the original case (uppercase/lowercase)
              decryptedMessage += isUpperCase ? newChar.toUpperCase() : newChar;
  
              counter++; // Increment the counter for valid characters
          } else {
              // If it's not a letter, keep it unchanged
              decryptedMessage += char;
          }
  
          // Skip over inserted random letters during decryption
          if (counter % 2 === 0 && counter > 0 && i < encryptedMessage.length - 1) {
              i++; // Skip the next character
          }
      }
      return decryptedMessage; // Return the fully decrypted message
  }

  