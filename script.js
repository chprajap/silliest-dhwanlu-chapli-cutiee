// script.js
let noButton = document.getElementById("noBtn");
let noMessage = document.getElementById("noMessage");
let container = document.querySelector('.container');

// Function to move the "No" button randomly within the screen
function moveNoButtonRandomly() {
    let maxX = window.innerWidth - noButton.offsetWidth - 50; // Prevent the button from going off-screen
    let maxY = window.innerHeight - noButton.offsetHeight - 50;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Make the "Yes" button work normally
document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").textContent = "Finally pehli ne chelli vaar gf banayi, 💍 Yes dhwanlu tu j che ne bas tu j rahis!!";
    document.getElementById("responseMessage").style.color = "green";
    container.style.backgroundColor = "#e8f5e9"; // Light green background
    
    // Remove the "No" button from the page
    noButton.style.display = "none";  // Alternatively, you can use: noButton.remove();
    
    // Hide the "You can't say No!" message
    noMessage.style.display = "none";  // Hide the "You can't say No!" message
});

// Show message and move the "No" button when mouse hovers over it
noButton.addEventListener("mouseover", function() {
    moveNoButtonRandomly(); // Move the button randomly
    noMessage.style.display = "block";  // Show the "You can't say No!" message
});

// Move the "No" button and show the message when clicked
noButton.addEventListener("click", function(event) {
    event.preventDefault();  // Prevent the default click action (no selection)
    moveNoButtonRandomly();  // Move the button randomly
    noMessage.style.display = "block";  // Show the message if clicked
});
