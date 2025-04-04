// Step 1: Wait for the DOM to be fully loaded before running any DOM related code
document.addEventListener("DOMContentLoaded", () => {
// Step 2: Get the DOM elements
    const boxContainer = document.querySelector("#box-container");
    const newBoxButton = document.querySelector("#new-box-button");
    const colorForm = document.querySelector("#color-form");
    const colorInput = document.querySelector("#color-input");
// Step 3: Create variables to track current color and unique box ID
    let currentColor = "black";
    let boxIdCounter = 1;
// Step 4: When color form is submitted, apply the color to all boxes  
    colorForm.addEventListener("submit",(e) => {
        e.preventDefault();
        const colorValue = colorInput.value.trim(); //Get the value from input
        if (colorValue) {
            currentColor = colorValue;
    // Apply this color to all boxes 
    document.querySelectorAll(".box").forEach ((box) => {
        box.style.backgroundColor = currentColor;
    });
    colorInput.value = "" // Reset the color input field
}
});

// Step 5: Function to create new box
function createBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.dataset.id = boxIdCounter; // Store the ID in a data attribute
    box.textContent = boxIdCounter; // Display the ID inside the box
    box.style.backgroundColor = currentColor; // Set the box color
    
// Step 8: Show page coordinates on mouseover
    box.addEventListener("mouseover", (e) => {
        const rect = e.target.getBoundingClientRect();
        e.target.textContent = `(${Math.round(rect.left)}, ${Math.round(rect.top)})`;
    });

// Step 9: Show ID again on mouseleave
    box.addEventListener("mouseleave", (e) => {
        e.target.textContent = e.target.dataset.id;
    });

    boxContainer.appendChild(box); // Add box to container
        boxIdCounter++; // Increment the box ID for the next box
}

// Step 6: Add a box when button is clicked
newBoxButton.addEventListener("click", createBox);
// Step 7: Double click a box to remove it
document.addEventListener("keydown", (e) => {
if (e.target === colorInput) return;
if (e.key === "n" || e.key === "N") {
    createBox();
}
});
// Step 10: Add box when 'N' or 'n' key is pressed
document.addEventListener("dblclick", (e) => {
    // Ignore key press if typing in the input field
    if (e.target.classList.contains("box")) {
        e.target.remove(); // Remove the box if double-clicked
    }
});
});