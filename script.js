// script.js
let noButton = document.getElementById("noBtn");
let yesButton = document.getElementById("yesBtn");
let noMessage = document.getElementById("noMessage");
let container = document.querySelector('.container');

// Function to get the position and size of an element
function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
    };
}

// Function to check if two elements overlap
function isOverlap(button1, button2) {
    const pos1 = getElementPosition(button1);
    const pos2 = getElementPosition(button2);
    
    return !(pos1.x + pos1.width < pos2.x || 
             pos1.x > pos2.x + pos2.width || 
             pos1.y + pos1.height < pos2.y || 
             pos1.y > pos2.y + pos2.height);
}

// Function to move the "No" button randomly within the screen, avoiding overlap with the "Yes" button
function moveNoButtonRandomly() {
    let maxX = window.innerWidth - noButton.offsetWidth - 50; // Prevent the button from going off-screen
    let maxY = window.innerHeight - noButton.offsetHeight - 50;

    let randomX, randomY;
    
    // Try moving the "No" button until it doesn't overlap with the "Yes" button
    do {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    } while (isOverlap(noButton, yesButton));  // Keep trying until there's no overlap
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
