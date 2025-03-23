// script.js
let noButton = document.getElementById("noBtn");
let noMessage = document.getElementById("noMessage");
let container = document.querySelector('.container');

// Function to keep the "No" button moving randomly
function moveNoButton() {
    let maxX = window.innerWidth - noButton.offsetWidth;
    let maxY = window.innerHeight - noButton.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Move the "No" button continuously every 100ms
// setInterval(moveNoButton, 100);

// Make the "Yes" button work normally
document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").textContent = "Finally pehli baar gf banayi, 💍 Yes dhwanlu tu j che ne bas tu j rahis!!";
    document.getElementById("responseMessage").style.color = "green";
    container.style.backgroundColor = "#e8f5e9"; // Light green background
});

// Show message when "No" is hovered over or clicked
noButton.addEventListener("mouseover", function() {
    noMessage.style.display = "block";  // Show the "You can't say No!" message
});

noButton.addEventListener("click", function(event) {
    event.preventDefault();  // Prevent clicking on the "No" button
    noMessage.style.display = "block";  // Show the message if clicked
});
