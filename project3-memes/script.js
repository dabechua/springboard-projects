// Get the canvas and context to draw on
const canvas = document.getElementById("memeCanvas");
const ctx = canvas.getContext("2d");

// Create an image object for the uploaded pic
let image = new Image();

// When a file is selected, read and load image
document.getElementById("imageInput").addEventListener("change", function (e) {
    const file = e.target.files[0]; // Get the uploaded file
    const reader = new FileReader(); //Create a fileReader to read the image

    reader.onload = function() {
        image.src = reader.result; // Set the image source to the file content};
        };

        if(file) {
            reader.readAsDataURL(file) // Read the file as a data URL
        }
});

// When the image loads, draw it on the canvas
image.onload = function() {
    drawMeme();
  };
  
  // Main function to draw the meme on canvas
  function generateMeme() {
    drawMeme();  // Just call drawMeme when button is clicked
  }
  
  // The real logic that handles everything
  function drawMeme() {
    const topText = document.getElementById("topText").value.toUpperCase();       // Get top text
    const bottomText = document.getElementById("bottomText").value.toUpperCase(); // Get bottom text
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);   // Clear previous content
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // Draw the image
  
    // Text style
    ctx.font = "30px Impact";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.textAlign = "center";
    ctx.lineWidth = 2;
  
    // Draw top text
    ctx.fillText(topText, canvas.width / 2, 40);
    ctx.strokeText(topText, canvas.width / 2, 40);
  
    // 📝 Draw bottom text
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
  }